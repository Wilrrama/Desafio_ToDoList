import { Button } from "../../fragments/button";
import { useContext, useState } from "react";
import { UserContext } from "../../providers/UserContext/UserContext";
import girafa_cabeca from "../../assets/img/girafa_cabeca.png";
import { AddTaskButton, NavbarUser, TasksContainer } from "./styles";
import { Modal } from "../../components/modal";
import { ModalUpdateUser } from "./components/ModalUpdateUser";
import { TaskContext } from "../../providers/TaskContext/TaskContext";
import { ModalAddTask } from "./components/ModalAddTask";
import { ModalEditTask } from "./components/ModalEditTask";

export const Dashboard = () => {
  const { tasks, deleteTask } = useContext(TaskContext);
  const { user, userLogout } = useContext(UserContext);
  const [selectedTaskId, setSelectedTaskId] = useState<string | number | null>(
    null
  );
  const [isModalUpdateUserOpen, setIsModalUpdateUserOpen] = useState(false);
  const [isModalAddTaskOpen, setIsModalAddTaskOpen] = useState(false);
  const [isModalEditTaskOpen, setIsModalEditTaskOpen] = useState(false);

  const handleOpenModal = () => setIsModalUpdateUserOpen(true);
  const handleCloseModal = () => setIsModalUpdateUserOpen(false);

  const handleOpenModalAddTask = () => setIsModalAddTaskOpen(true);
  const handleCloseModalAddTask = () => setIsModalAddTaskOpen(false);

  const handleOpenModalEditTask = (taskId: string | number) => {
    setSelectedTaskId(taskId);
    setIsModalEditTaskOpen(true);
  };

  const handleCloseModalEditTask = () => {
    setIsModalEditTaskOpen(false);
    setSelectedTaskId(null);
  };

  const handleDeleteTask = async (taskId: string | number) => {
    try {
      await deleteTask(taskId);
    } catch (error) {
      console.error("Erro ao excluir tarefa:", error);
    }
  };

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

      <AddTaskButton onClick={handleOpenModalAddTask}>
        Adicionar Tarefas
      </AddTaskButton>

      <Modal isOpen={isModalAddTaskOpen} onClose={handleCloseModalAddTask}>
        <ModalAddTask />
      </Modal>

      <Modal isOpen={isModalEditTaskOpen} onClose={handleCloseModalEditTask}>
        {selectedTaskId && <ModalEditTask taskId={selectedTaskId} />}
      </Modal>

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
                          checked={task.status}
                          // onChange={() => handleToggleStatus(task.id)}
                          style={{ marginRight: "10px" }}
                        />
                        {task.status ? "Concluída" : "Pendente"}
                      </label>
                      {/* Botões de Alterar e Excluir */}
                      <div className="button__container">
                        <button
                          onClick={() => handleOpenModalEditTask(task.id)}
                        >
                          Alterar
                        </button>
                        <button onClick={() => handleDeleteTask(task.id)}>
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
