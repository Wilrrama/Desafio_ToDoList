import { createContext, useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { UserContext } from "../UserContext/UserContext";
import { AxiosError } from "axios";

export interface ITask {
  id: string | number;
  title: string;
  description: string;
  status: boolean;
}

export interface ITaskWithoutId {
  id?: string | number;
  title: string;
  description: string;
}

interface ITaskContext {
  tasks: ITask[];
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
  deleteTask: (taskId: string | number) => Promise<void>;
  createTask: (formData: ITaskWithoutId) => Promise<void>;
}

export const TaskContext = createContext<ITaskContext>({} as ITaskContext);

export interface ITasksProviderProps {
  children: React.ReactNode;
}

export const TaskProvider = ({ children }: ITasksProviderProps) => {
  const { setLoading } = useContext(UserContext);
  const [tasks, setTasks] = useState<ITask[]>([]);

  const createTask = async (formData: ITaskWithoutId) => {
    const token = localStorage.getItem("@TOKEN_TODO");
    try {
      setLoading(true);
      const { data } = await api.post("/tasks", formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTasks((prevTasks) => [...prevTasks, data]);
      toast.success("Tarefa criada com sucesso.");
    } catch (error: AxiosError | any) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
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
    getTasks();
  }, []);

  const deleteTask = async (taskId: number | string) => {
    const token = localStorage.getItem("@TOKEN_TODO");
    try {
      setLoading(true);
      await api.delete(`/tasks/${taskId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId)); // Atualiza o estado corretamente
      toast.success("Tarefa excluída com sucesso!");
    } catch (error: AxiosError | any) {
      toast.error("Erro ao excluir tarefa");
    } finally {
      setLoading(false);
    }
  };

  return (
    <TaskContext.Provider value={{ tasks, setTasks, deleteTask, createTask }}>
      {children}
    </TaskContext.Provider>
  );
};
