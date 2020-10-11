import { StyledButton } from "./styles";

const Button = ({ title, type, disabled, ...props }) => {
  return (
    <StyledButton type={type} disabled={disabled} {...props}>
      {title}
    </StyledButton>
  );
};

export default Button;
