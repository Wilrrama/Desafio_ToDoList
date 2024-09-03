import { Button } from "../../fragments/button";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext/UserContext";

export const Dashboard = () => {
  const { userLogout } = useContext(UserContext);

  return (
    <div>
      <h1> Dashboard</h1>
      <Button name={"Sair"} onClick={userLogout} />
    </div>
  );
};
