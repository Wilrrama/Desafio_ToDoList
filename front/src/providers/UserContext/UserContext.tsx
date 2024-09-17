import { createContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { TLoginForm } from "../../pages/login/schema";
import { useLocation, useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import { TRegisterForm } from "../../pages/register/schema";
import { toast } from "react-toastify";

export const UserContext = createContext({} as IUserContext);

export interface IUserProviderProps {
  children: React.ReactNode;
}

export interface IUserContext {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  loading: ILoading | boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean | ILoading>>;
  userLogin: (formData: any) => Promise<void>;
  userLogout: () => void;
  userRegister: (formData: TRegisterForm) => Promise<void>;
}

export interface IUser {
  password: string | undefined;
  id: number;
  name: string;
  email: string;
}

export interface ILoading {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AuthContext = createContext({});

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState<ILoading | boolean>(false);
  const location = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      const token = localStorage.getItem("@TOKEN_TODO");
      const storedUser = localStorage.getItem("@USER_TODO"); // Recupera o usuário do localStorage

      if (token && storedUser) {
        try {
          setLoading(true);
          const userData = JSON.parse(storedUser);
          setUser(userData);
        } catch (error: AxiosError | any) {
          console.error(error.message);
        } finally {
          setLoading(false);
        }
      }
    };
    getUser();
  }, []);

  const userLogin = async (formData: TLoginForm) => {
    try {
      setLoading(true);
      const { data } = await api.post("/login", formData);
      console.log("Resposta da API:", data);
      setUser(data.user);
      console.log(data.user);
      localStorage.setItem("@TOKEN_TODO", data.token);
      localStorage.setItem("@USERID_TODO", data.user.id);
      localStorage.setItem("@USER_TODO", JSON.stringify(data.user));

      console.log("Usuário logado com sucesso.");
      toast.success("Usuário logado com sucesso.");
      navigate("/dashboard");
    } catch (error: AxiosError | any) {
      console.log("Senha ou e-mail inválidos");
      toast.error("Senha ou e-mail inválidos.");
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const userRegister = async (formData: TRegisterForm) => {
    try {
      setLoading(true);
      await api.post("/users", formData);
      console.log(formData);

      console.log("Usuário criado com sucesso.");
      toast.success("Usuário criado com sucesso.");
      navigate("/login");
    } catch (error: AxiosError | any) {
      toast.error("E-mail já existente.");
      console.log("E-mail já existente.");

      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const userLogout = () => {
    setUser(null);

    localStorage.removeItem("@TOKEN_TODO");
    localStorage.removeItem("@USERID_TODO");
    localStorage.removeItem("@USER_TODO");

    toast.success("Usuário deslogado com sucesso!");

    navigate("/");
  };

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        loading,
        userLogin,
        userLogout,
        userRegister,
        setLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
