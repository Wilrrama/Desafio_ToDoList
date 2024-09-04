import { Button } from "../../fragments/button";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext/UserContext";

export const Dashboard = () => {
  const { userLogout, user } = useContext(UserContext);

  return (
    <div>
      <h1> Dashboard</h1>
      <Button name={"Sair"} onClick={userLogout} />
      <h1>{user ? user.name : "Usuário não encontrado"}</h1>
    </div>
  );
};
