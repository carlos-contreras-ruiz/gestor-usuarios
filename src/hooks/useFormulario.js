import { useState } from "react";

export const useFormulario = (initialState = {}) => {
  const [usuarios, setusuarios] = useState([]);

  const [formulario, setFormulario] = useState(initialState);

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const saveUsers = () => {
    console.log(formulario);
    setusuarios([...usuarios, formulario]);
  };

  const reset = () => {
    console.log(formulario);
    setFormulario(initialState);
  };

  return {
    formulario,
    usuarios,
    handleChange,
    saveUsers,
    reset,
  };
};
