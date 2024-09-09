import { useContext } from "react";
import { AuthContext } from "../providers/UserContext/UserContext";

export const useAuth = () => {
  const authContext = useContext(AuthContext);

  return authContext;
};
