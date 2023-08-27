import React from "react";
import "./textInput.css";
import { BaseProps } from "../Base";
interface Props extends BaseProps {
  defaultText?: string;
  onChange: Function;
}
export const TextInput: React.FunctionComponent<Props> = ({
  defaultText,
  onChange,
  className,
}) => (
  <input
    defaultValue={defaultText}
    onChange={(val) => onChange(val.target.value)}
    className={"text-input " + className}
    type="text"
  ></input>
);
