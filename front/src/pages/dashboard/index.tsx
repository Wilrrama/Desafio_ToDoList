import { Button } from "../../fragments/button";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../providers/UserContext/UserContext";
import girafa_cabeca from "../../assets/img/girafa_cabeca.png";
import { NavbarUser, TasksContainer } from "./styles";
import { Modal } from "../../components/modal";
import { ModalUpdateUser } from "./components/ModalUpdateUser";
import { TaskContext } from "../../providers/TaskContext/TaskContext";

export const Dashboard = () => {
  const { tasks = [], getTasks } = useContext(TaskContext);
  const { user, userLogout } = useContext(UserContext);
  const [isModalUpdateUserOpen, setIsModalUpdateUserOpen] = useState(false);

  const handleOpenModal = () => setIsModalUpdateUserOpen(true);
  const handleCloseModal = () => setIsModalUpdateUserOpen(false);

  useEffect(() => {
    getTasks();
  }, []);

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

      <Modal isOpen={isModalUpdateUserOpen} onClose={handleCloseModal}>
        <ModalUpdateUser />
      </Modal>

      <div>
        <Button name={"Adicionar Tarefas"} />
      </div>

      <TasksContainer>
        <div>
          {tasks.length === 0 ? (
            <h1>Nenhuma tarefa cadastrada</h1>
          ) : (
            <div>
              <h1>Lista de Tarefas</h1>
              <ul>
                {tasks.map((task) => (
                  <li key={task.id}>
                    <div>
                      <h2>{task.title}</h2>
                      <p>{task.description}</p>
                      {/* Checkbox e Texto de Status */}
                      <label style={{ display: "flex", alignItems: "center" }}>
                        <input
                          type="checkbox"
                          checked={task.completed}
                          onChange={() => handleToggleStatus(task.id)}
                          style={{ marginRight: "10px" }} // Espaçamento entre checkbox e texto
                        />
                        {task.completed ? "Concluída" : "Pendente"}
                      </label>
                      {/* Botões de Alterar e Excluir */}
                      <div className="button__container">
                        <button onClick={() => handleEditTask(task.id)}>
                          Alterar
                        </button>
                        <button
                        // onClick={() => handleDeleteTask(task.id)}
                        >
                          Excluir
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </TasksContainer>
    </>
  );
};
