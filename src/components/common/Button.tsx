import React from "react";

interface ButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
}

const Button: React.FC<ButtonProps> = ({ title, ...props }) => (
  <div {...props} />
);

export default Button;
