import { StyledButton } from "./styles";

const Button = ({ title = "", type, disabled, children = null, ...props }) => {
  return (
    <StyledButton type={type} disabled={disabled} {...props}>
      {title}
      {children}
    </StyledButton>
  );
};

export default Button;
