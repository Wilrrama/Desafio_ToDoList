import { Button } from "../../fragments/button";
import { Input } from "../../fragments/input";
import mascote from "../../assets/img/mascote.png";
import { StyledLogin } from "./styles";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <StyledLogin>
      <div className="form__container">
        <h1> Login</h1>
        <p>Acesse suas Tarefas</p>
        <div className="input__container">
          <Input placeholder="E-mail" />
          <Input placeholder="Senha" />
        </div>
        <div className="button__container">
          <Link to={"/dashboard"}>
            <Button name={"Entrar"} />
          </Link>
          <p>Não possui cadastro?</p>
          <Link to="/register">
            <Button name={"Cadastra-se"} />
          </Link>
        </div>
      </div>
      <div className="image__container">
        <img src={mascote} alt="" />
      </div>
    </StyledLogin>
  );
};
