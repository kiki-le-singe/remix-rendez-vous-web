import React from "react";
import { ButtonProps } from "./types";
import "./styles.css";

export default function Button({
  label,
  theme = "light",
  onClick = () => {},
  display = "medium",
}: ButtonProps) {
  return (
    <button className={`Button ${theme} ${display}`} onClick={onClick}>
      {label}
    </button>
  );
}
