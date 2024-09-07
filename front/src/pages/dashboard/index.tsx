import { Button } from "../../fragments/button";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext/UserContext";
import girafa_cabeca from "../../assets/img/girafa_cabeca.png";
import { NavbarUser } from "./styles";

export const Dashboard = () => {
  const { user, userLogout } = useContext(UserContext);

  return (
    <>
      <NavbarUser>
        <div className="user__container">
          <div className="user__info">
            <img src={girafa_cabeca} alt="" />
            <div className="text__container">
              <h1>Seja bem-vindo!</h1>
              <h3>{user?.name || "Usuário não encontrado"}</h3>
            </div>
          </div>
          <div className="button__container">
            <Button name={"Editar"} />
            <Button
              name={"Sair"}
              onClick={userLogout}
              className="btn__logout"
            />
          </div>
        </div>
      </NavbarUser>
      <h1>nenhuma tarefa</h1>
    </>
  );
};
