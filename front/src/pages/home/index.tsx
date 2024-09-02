import { Link } from "react-router-dom";
import mascote from "../../assets/img/mascote.png";
import { StyledHome } from "./styles";

export const Home = () => {
  return (
    <StyledHome>
      <div>
        <h3>ToDo</h3>
        <h1>Crie suas tarefas online</h1>
        <p>Controle e organize suas Tarefas</p>
        <div className="button-group">
          <Link to="/register">
            <button>Cadastar</button>
          </Link>
          <p>ou</p>
          <Link to="/login">
            <button>Acessar</button>
          </Link>
        </div>
      </div>
      <img src={mascote} alt="girafa trabalhando no seu laptop" />
    </StyledHome>
  );
};
