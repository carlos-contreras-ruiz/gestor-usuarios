import { useState } from "react";

export const useFormulario = (initialState = {}) => {
  const [formulario, setFormulario] = useState(initialState);

  const handleChange = (e) => {
    setFormulario({
      [e.target.name]: e.target.value,
    });
  };
  return {
    formulario,
    handleChange,
  };
};
