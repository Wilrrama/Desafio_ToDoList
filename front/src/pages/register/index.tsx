import { Link } from "react-router-dom";
import { Input } from "../../fragments/input";
import { Button } from "../../fragments/button";
import { StyledRegister } from "./styles";
import { FaArrowLeft } from "react-icons/fa";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema, TRegisterForm } from "./schema";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext/UserContext";
import { Loading } from "../../components/loading";
import { PageContainer } from "../home/styles";

interface TBodyForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const Register = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterForm>({
    resolver: zodResolver(registerFormSchema),
  });

  const { userRegister, loading } = useContext(UserContext);

  const submit: SubmitHandler<TRegisterForm> = (formData) => {
    const bodyForm: TBodyForm = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      confirmPassword: formData.password,
    };
    userRegister(bodyForm);
    reset();
  };

  return (
    <>
      {loading && <Loading />}
      <PageContainer>
        <StyledRegister>
          <div>
            <Link to="/">
              <h3>
                <FaArrowLeft />
                Voltar
              </h3>
            </Link>

            <h1>Cadastre-se</h1>
            <p>Preencha os campos abaixo para criar uma conta</p>
          </div>
          <form onSubmit={handleSubmit(submit)}>
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
                    placeholder="Senha"
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
                <Button name={"Cadastrar"} type="submit" />
              </div>
            </div>
          </form>
        </StyledRegister>
      </PageContainer>
    </>
  );
};
