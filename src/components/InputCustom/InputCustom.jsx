import React from "react";
import "./InputCustom.css";

export const InputCustom = ({ label, ...rest }) => {
  return (
    <div className="field">
      <label>{label}</label>
      <input {...rest} />
    </div>
  );
};
