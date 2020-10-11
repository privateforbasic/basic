import { Ref } from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  className?: string;
  type?: "submit" | "reset" | "button";
  variant: "primary" | "secondary" | "tercary";
  refName?: Ref<HTMLButtonElement>;
  buttonProps?: object | undefined;
}

export interface StyledButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className: string;
  type?: "submit" | "reset" | "button";
  variant: "primary" | "secondary" | "tercary";
  refName?: Ref<HTMLButtonElement>;
  buttonProps?: object | undefined;
}
