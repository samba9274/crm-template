import React from "react";
import "./button.css";
import { BaseProps } from "../Base";
interface Props extends BaseProps {
  buttonText: string;
  onClick: Function;
}
export const Button: React.FunctionComponent<Props> = ({
  buttonText,
  className,
  onClick,
}) => (
  <button onClick={() => onClick()} className={"button " + className}>
    {buttonText}
  </button>
);
