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
  getTasktById: (taskId: number | string) => Promise<any>;
  getTasks: () => Promise<void>;
}

export const TaskContext = createContext<ITaskContext>({} as ITaskContext);

export interface ITasksProviderProps {
  children: React.ReactNode;
}

export const TaskProvider = ({ children }: ITasksProviderProps) => {
  const { setLoading } = useContext(UserContext);
  const [tasks, setTasks] = useState<ITask[]>([]);

  const userId = localStorage.getItem("@USERID_TODO");

  const createTask = async (formData: ITaskWithoutId) => {
    const token = localStorage.getItem("@TOKEN_TODO");
    const userId = localStorage.getItem("@USERID_TODO");
    try {
      setLoading(true);
      const { data } = await api.post(
        "/tasks",
        { ...formData, userId },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setTasks((prevTasks) => [...prevTasks, data]);
      getTasks();
      toast.success("Tarefa criada com sucesso.");
    } catch (error: AxiosError | any) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getTasks = async () => {
    try {
      const token = localStorage.getItem("@TOKEN_TODO");
      const userId = localStorage.getItem("@USERID_TODO");

      if (!token || !userId) {
        toast.error("Token ou ID do usuário não encontrado");
        return;
      }

      const response = await api.get(`/tasks?userId=${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setTasks(response.data);
      toast.success("Tarefas carregadas com sucesso!");
    } catch (error) {
      toast.error("Erro ao carregar tarefas");
      console.error("Erro ao buscar tarefas:", error);
    }
  };

  useEffect(() => {
    if (userId) {
      getTasks();
    }
  }, [userId]);

  const deleteTask = async (taskId: number | string) => {
    const token = localStorage.getItem("@TOKEN_TODO");
    try {
      setLoading(true);
      await api.delete(`/tasks/${taskId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
      toast.success("Tarefa excluída com sucesso!");
    } catch (error: AxiosError | any) {
      toast.error("Erro ao excluir tarefa");
    } finally {
      setLoading(false);
    }
  };

  const getTasktById = async (taskId: number | string) => {
    const token = localStorage.getItem("@TOKEN_TODO");
    try {
      const response = await api.get(`/tasks/${taskId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar tarefa:", error);
      throw error;
    }
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        deleteTask,
        createTask,
        getTasktById,
        getTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
