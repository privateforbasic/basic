import React, { FC, forwardRef } from "react";

import { ButtonProps } from "./types";
import { StyledButton } from "./styles";

// const sizes = [];

export type Ref = HTMLButtonElement;

const Button = forwardRef<Ref, ButtonProps>(
  ({ title, type, variant, className, ...buttonProps }, ref) => (
    <StyledButton
      ref={ref}
      variant={variant}
      className={className}
      aria-label={title}
      {...buttonProps}
    >
      <span dangerouslySetInnerHTML={{ __html: title }} />
    </StyledButton>
  )
);

Button.defaultProps = {
  title: "",
  variant: "primary",
  className: "",
} as ButtonProps;

export default React.memo(Button);
