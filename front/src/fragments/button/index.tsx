import { forwardRef, ButtonHTMLAttributes } from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
}

export const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  ({ color, name, onClick, type, ...rest }, ref) => {
    return (
      <button color={color} type={type} onClick={onClick} ref={ref} {...rest}>
        {name}
      </button>
    );
  }
);
