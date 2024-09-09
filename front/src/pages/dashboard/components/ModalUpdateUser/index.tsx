import { useContext, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserContext } from "../../../../providers/UserContext/UserContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { TUpdateForm, updateFormSchema } from "../../../register/schema";
import { Button } from "../../../../fragments/button";
import { Input } from "../../../../fragments/input";
import { Loading } from "../../../../components/loading";
import { api } from "../../../../services/api";
import { toast } from "react-toastify";
import { StyledModalUpdateUser } from "./styles";

export const ModalUpdateUser = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TUpdateForm>({
    resolver: zodResolver(updateFormSchema),
  });

  const { user, setUser, loading } = useContext(UserContext);
  const [updatedUser, setUpdatedUser] = useState(user);

  const updateUser = async (data: TUpdateForm) => {
    try {
      const userId = localStorage.getItem("@USERID_TODO");
      console.log("User ID from localStorage:", userId);
      if (userId) {
        const body: Partial<TUpdateForm> = {
          name: data.name,
          email: data.email,
          ...(data.password && { password: data.password }),
          ...(data.confirmPassword && {
            confirmPassword: data.confirmPassword,
          }),
        };

        const res = await api.patch(`/users/${userId}`, body);

        setUpdatedUser(res.data);
        localStorage.setItem("@USER_TODO", JSON.stringify(res.data));
        setUser(res.data);

        toast.success("Perfil atualizado com sucesso");
      } else {
        toast.error("ID do usuário não encontrado");
      }
    } catch (error) {
      toast.error("Erro ao atualizar o perfil");
      console.error(error);
    }
  };

  const onSubmit: SubmitHandler<TUpdateForm> = async (data) => {
    await updateUser(data);
    reset();
    console.log("cliclou");
    console.log(data);
  };

  useEffect(() => {
    if (user) {
      reset({
        name: user.name,
        email: user.email,
      });
    }
  }, [user, reset]);

  return (
    <>
      {loading && <Loading />}
      <StyledModalUpdateUser>
        <div>
          <h4>Atualizar Perfil</h4>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-container">
              <div className="input-row">
                <div className="input-wrapper">
                  <Input type="text" placeholder="Nome" {...register("name")} />
                  {errors.name && <span>{errors.name.message}</span>}
                </div>
                <div className="input-wrapper">
                  <Input
                    type="email"
                    placeholder="E-mail"
                    {...register("email")}
                  />
                  {errors.email && <span>{errors.email.message}</span>}
                </div>
              </div>
              <div className="input-row">
                <div className="input-wrapper">
                  <Input
                    type="password"
                    placeholder="Senha (deixe em branco se não quiser alterar)"
                    {...register("password")}
                  />
                  {errors.password && <span>{errors.password.message}</span>}
                </div>
                <div className="input-wrapper">
                  <Input
                    type="password"
                    placeholder="Confirme sua senha"
                    {...register("confirmPassword")}
                  />
                  {errors.confirmPassword && (
                    <span>{errors.confirmPassword.message}</span>
                  )}
                </div>
              </div>
              <div className="button-container">
                <Button name={"Alterar"} type="submit" />
              </div>
            </div>
          </form>
        </div>
      </StyledModalUpdateUser>
    </>
  );
};
