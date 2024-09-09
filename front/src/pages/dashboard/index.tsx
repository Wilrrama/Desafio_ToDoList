import { Button } from "../../fragments/button";
import { useContext, useState } from "react";
import { UserContext } from "../../providers/UserContext/UserContext";
import girafa_cabeca from "../../assets/img/girafa_cabeca.png";
import { NavbarUser } from "./styles";
import { Modal } from "../../components/modal";
import { ModalUpdateUser } from "./components/ModalUpdateUser";

export const Dashboard = () => {
  const { user, userLogout } = useContext(UserContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

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
            <Button name={"Editar"} onClick={handleOpenModal} />
            <Button
              name={"Sair"}
              onClick={userLogout}
              className="btn__logout"
            />
          </div>
        </div>
      </NavbarUser>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2>Editar Usuário</h2>
        <ModalUpdateUser />
      </Modal>

      <h1>nenhuma tarefa</h1>
    </>
  );
};
