import React from "react";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  title?: string;
}

const TextInput: React.FC<TextInputProps> = ({ title, ...props }) => (
  <input {...props} />
);

export default TextInput;
