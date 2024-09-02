import { StyledFooter } from "./styles";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

export const Footer = () => {
  return (
    <StyledFooter>
      <p>Todos os direitos reservados </p>
      <p>
        Wilson Santos -
        <a
          href="https://www.linkedin.com/in/wilson-alves-franchi-dos-santos-b3ba3332/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Wilrrama"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub />
        </a>
        <a
          href="https://wa.me/19982876099"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsWhatsapp />
        </a>
      </p>
    </StyledFooter>
  );
};
