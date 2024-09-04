import { createContext, useState } from "react";
import { api } from "../../services/api";
import { TLoginForm } from "../../pages/login/schema";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import { TRegisterForm } from "../../pages/register/schema";
import { toast } from "react-toastify";

export const UserContext = createContext({} as IUserContext);

export interface IUserProviderProps {
  children: React.ReactNode;
}

export interface IUserContext {
  user: IUser | null;
  userLogin: (formData: any) => Promise<void>;
  userLogout: () => void;
  userRegister: (formData: TRegisterForm) => Promise<void>;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
}

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);

  const navigate = useNavigate();

  const userLogin = async (formData: TLoginForm) => {
    try {
      const { data } = await api.post("/login", formData);
      console.log("Resposta da API:", data);
      setUser(data.user);
      console.log(data.user);
      localStorage.setItem("@TOKEN_TODO", data.accessToken);
      console.log("Usuário logado com sucesso.");
      toast.success("Usuário logado com sucesso.");
      navigate("/dashboard");
    } catch (error: AxiosError | any) {
      console.log("Senha ou e-mail inválidos");
      toast.error("Senha ou e-mail inválidos.");
      console.error(error.message);
    }
  };

  const userRegister = async (formData: TRegisterForm) => {
    try {
      await api.post("/users", formData);
      console.log(formData);

      console.log("Usuário criado com sucesso.");
      toast.success("Usuário criado com sucesso.");
      navigate("/login");
    } catch (error: AxiosError | any) {
      toast.error("E-mail já existente.");
      console.log("E-mail já existente.");

      console.error(error.message);
    }
  };

  const userLogout = () => {
    setUser(null);

    localStorage.removeItem("@TOKEN_TODO");

    toast.success("Usuário deslogado com sucesso!");

    navigate("/");
  };

  return (
    <UserContext.Provider value={{ user, userLogin, userLogout, userRegister }}>
      {children}
    </UserContext.Provider>
  );
};
