import React from "react";
import "./label.css";
import { BaseProps } from "../Base";

interface Props extends BaseProps {
  label: string;
}

export const Label: React.FunctionComponent<Props> = ({ label, className }) => (
  <label className={"label " + className}>{label}</label>
);
