import { Button } from "../../fragments/button";
import { Input } from "../../fragments/input";
import mascote from "../../assets/img/mascote.png";
import { StyledLogin } from "./styles";
import { Link } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserContext } from "../../providers/UserContext/UserContext";
import { useContext } from "react";
import { loginFormSchema, TLoginForm } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";

export const Login = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginForm>({ resolver: zodResolver(loginFormSchema) });

  const { userLogin } = useContext(UserContext);

  const submit: SubmitHandler<TLoginForm> = async (formData) => {
    console.log(formData);
    await userLogin(formData);
    reset();
  };

  return (
    <StyledLogin>
      <div className="form__container">
        <form onSubmit={handleSubmit(submit)}>
          <h1> Login</h1>
          <p>Acesse suas Tarefas</p>
          <div className="input__container">
            <Input placeholder="E-mail" type="email" {...register("email")} />
            {errors.email ? <span>{errors.email.message}</span> : null}
            <Input
              placeholder="Senha"
              type="password"
              {...register("password")}
            />
            {errors.password ? <span>{errors.password.message}</span> : null}
          </div>
          <div className="button__container">
            <Button name={"Entrar"} type="submit" />
            <p>Não possui cadastro?</p>
            <Link to="/register">
              <Button name={"Cadastrar-se"} />
            </Link>
          </div>
        </form>
      </div>
      <div className="image__container">
        <img src={mascote} alt="girafa usando o notebook" />
      </div>
    </StyledLogin>
  );
};
