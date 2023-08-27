import React from "react";
import "./modal.css";
import { Button } from "../Button/button";
interface Props {
  heading: string;
  body: any;
}
export const Modal: React.FunctionComponent<Props> = ({ heading, body }) => (
  <div className="modalContainer">
    <div className="modal">
      <div className="head">
        {heading}
        <Button onClick={() => {}} buttonText="×" className="close-button" />
      </div>
      <div className="body">{body}</div>
    </div>
  </div>
);
