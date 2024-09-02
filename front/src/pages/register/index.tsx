import { Link } from "react-router-dom";
import { Input } from "../../fragments/input";
import { Button } from "../../fragments/button";
import { StyledRegister } from "./styles";

export const Register = () => {
  return (
    <StyledRegister>
      <Link to="/">
        <h3>Voltar</h3>
      </Link>
      <h1>Cadastre-se</h1>
      <p>Preencha os campos abaixo para criar uma conta</p>
      <div className="form-container">
        <div className="input-row">
          <Input type="text" placeholder="Nome" />
          <Input type="email" placeholder="E-mail" />
        </div>
        <div className="input-row">
          <Input type="password" placeholder="Senha" />
          <Input type="password" placeholder="Confirme sua senha" />
        </div>
        <div className="button-container">
          <Button name={"Cadastrar"} type="submit" />
        </div>
      </div>
    </StyledRegister>
  );
};
