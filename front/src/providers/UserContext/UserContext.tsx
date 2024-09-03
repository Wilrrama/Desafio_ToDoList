import { createContext, useState } from "react";
import { api } from "../../services/api";
import { TLoginForm } from "../../pages/login/schema";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";

export const UserContext = createContext({} as IUserContext);

export interface IUserProviderProps {
  children: React.ReactNode;
}

export interface IUserContext {
  user: IUser | null;
  userLogin: (formData: any) => Promise<void>;
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
      localStorage.setItem("@TOKEN_TODO", data.accessToken);
      console.log("Usuário logado com sucesso.");
      navigate("/dashboard");
    } catch (error: AxiosError | any) {
      console.log("Senha ou e-mail inválidos");
      console.error(error.message);
    }
  };

  return (
    <UserContext.Provider value={{ user, userLogin }}>
      {children}
    </UserContext.Provider>
  );
};
