import { InputCustom } from "./InputCustom/InputCustom";
import { ButtonCustom } from "./ButtonCustom/ButtonCustom";
import { useFormulario } from "../hooks/useFormulario";

export const UserForm = ({ submit }) => {
  const { formulario, handleChange, reset } = useFormulario({
    name: "",
    lastname: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    //saveUsers();
    submit(formulario);
    reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputCustom
        name="name"
        placeholder="Nombre"
        value={formulario.name}
        onChange={handleChange}
        label="Nombre"
      />
      <InputCustom
        name="lastname"
        placeholder="Lastname"
        value={formulario.lastname}
        onChange={handleChange}
        label="Lastname"
      />
      <InputCustom
        name="email"
        placeholder="Emial"
        value={formulario.email}
        onChange={handleChange}
        label="Email"
      />
      <ButtonCustom>Enviar</ButtonCustom>
    </form>
  );
};
