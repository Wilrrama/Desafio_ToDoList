import { useContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TAddTask, taskSchema } from "./schema";
import { Input } from "../../../../fragments/input";
import { Button } from "../../../../fragments/button";
import { TaskContext } from "../../../../providers/TaskContext/TaskContext";
import { StyledModalAddTask } from "./styles";

export const ModalAddTask = () => {
  const { createTask } = useContext(TaskContext);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<TAddTask>({
    resolver: zodResolver(taskSchema),
  });

  const submit = async (newTask: TAddTask) => {
    console.log("Dados enviados:", newTask);
    await createTask(newTask);
    reset();
  };

  return (
    <StyledModalAddTask>
      <h1>Adicionar Tarefas</h1>
      <form onSubmit={handleSubmit(submit)}>
        <div className="form-container">
          <div className="input-wrapper">
            <Input
              type="text"
              id="title"
              placeholder="Título da tarefa"
              {...register("title")}
            />
            {errors.title && <span>{String(errors.title.message)}</span>}
          </div>

          <div className="input-wrapper">
            <textarea
              className="description"
              // type="text"
              placeholder="Descrição da tarefa"
              {...register("description")}
            />
            {errors.description && (
              <span>{String(errors.description.message)}</span>
            )}
          </div>
        </div>

        <div className="button-container">
          <Button name={"Adicionar tarefa"} type="submit" />
        </div>
      </form>
    </StyledModalAddTask>
  );
};
