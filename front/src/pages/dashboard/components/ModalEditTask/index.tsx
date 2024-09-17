import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../../../../fragments/button";
import { Input } from "../../../../fragments/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { editTaskSchema, TEditTask } from "../ModalAddTask/schema";
import { useContext, useEffect } from "react";
import { TaskContext } from "../../../../providers/TaskContext/TaskContext";
import { toast } from "react-toastify";
import { StyledModalUpdateTask } from "./styles";
import { api } from "../../../../services/api";

export const ModalEditTask = ({ taskId }: { taskId: string | number }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<TEditTask>({
    resolver: zodResolver(editTaskSchema),
  });

  const { getTasktById, getTasks } = useContext(TaskContext);

  useEffect(() => {
    const getTask = async () => {
      try {
        const taskData = await getTasktById(taskId);
        setValue("title", taskData.title);
        setValue("description", taskData.description);
      } catch (error) {
        toast.error("Erro ao atualizar task", { autoClose: 500 });
        console.error("Erro ao buscar os dados:", error);
      }
    };
    getTask();
  }, [taskId, setValue]);

  const onSubmit: SubmitHandler<TEditTask> = async (data) => {
    console.log("Dados enviados:", data);
    const token = localStorage.getItem("@TOKEN_TODO");
    try {
      // Atualizando a task no backend usando o taskId
      const response = await api.patch(`tasks/${taskId}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      getTasks();
      toast.success("Tarefa atualizada com sucesso", { autoClose: 500 });
    } catch (error) {
      toast.error("Erro ao atualizar tarefa", { autoClose: 500 });
      console.error("Erro ao atualizar tarefa:", error);
    }
  };

  return (
    <StyledModalUpdateTask>
      <h2>Editar tarefa</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input
            type="text"
            placeholder="Título da tarefa"
            {...register("title")}
          />
          {errors.title && <span>{errors.title.message}</span>}{" "}
          {/* Mostra erros, se houver */}
        </div>
        <div>
          <textarea
            // type="text"
            className="description"
            placeholder="Descrição da tarefa"
            {...register("description")}
          />
          {errors.description && <span>{errors.description.message}</span>}
        </div>
        <div className="button-container">
          <Button name={"Alterar"} type="submit" />
        </div>
      </form>
    </StyledModalUpdateTask>
  );
};
