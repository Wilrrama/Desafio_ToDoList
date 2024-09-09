import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";

interface ITask {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

interface ITaskContext {
  tasks: ITask[];
  getTasks: () => void;
}

export const TaskContext = createContext<ITaskContext>({} as ITaskContext);

export interface ITasksProviderProps {
  children: React.ReactNode;
}

export const TaskProvider = ({ children }: ITasksProviderProps) => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const getTasks = async () => {
    try {
      const token = localStorage.getItem("@TOKEN_TODO");

      if (!token) {
        toast.error("Token não encontrado");
        return;
      }

      const response = await api.get("/tasks", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);

      setTasks(response.data);
      toast.success("Buscando tarefas!");
    } catch (error) {
      toast.error("Erro ao carregar tarefas");
      console.error("Erro ao buscar tarefas:", error);
    }
  };

  return (
    <TaskContext.Provider value={{ tasks, getTasks }}>
      {children}
    </TaskContext.Provider>
  );
};
