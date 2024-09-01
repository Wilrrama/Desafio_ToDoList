import logoHeader from "../../assets/img/preto.png";
import { StyledHeader } from "./styles";

export const Header = () => {
  return (
    <StyledHeader>
      {/* <h1>Todo List</h1> */}
      <img src={logoHeader} alt="logotipo da Jack experts" />
    </StyledHeader>
  );
};
