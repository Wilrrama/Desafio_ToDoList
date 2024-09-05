import { ImSpinner4 } from "react-icons/im";
import { StyledLoading, StyledLoadingContainer } from "./styles";

export const Loading = () => {
  return (
    <StyledLoadingContainer>
      <StyledLoading>
        <ImSpinner4 />
      </StyledLoading>
    </StyledLoadingContainer>
  );
};
