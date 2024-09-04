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

interface TBodyForm {
  name: string;
  email: string;
  password: string;
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

  const { userRegister } = useContext(UserContext);

  const submit: SubmitHandler<TRegisterForm> = (formData) => {
    const bodyForm: TBodyForm = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    };
    userRegister(bodyForm);
    reset();
  };

  return (
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
            <Input type="text" placeholder="Nome" {...register("name")} />
            {errors.name && <p>{errors.name.message}</p>}
            <Input type="email" placeholder="E-mail" {...register("email")} />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div className="input-row">
            <Input
              type="password"
              placeholder="Senha"
              {...register("password")}
            />
            {errors.password && <p>{errors.password.message}</p>}
            <Input
              type="password"
              placeholder="Confirme sua senha"
              {...register("confirmPassword")}
            />
            {errors.password && <p>{errors.password.message}</p>}
          </div>
          <div className="button-container">
            <Button name={"Cadastrar"} type="submit" />
          </div>
        </div>
      </form>
    </StyledRegister>
  );
};
