import "./App.css";
import { InputCustom } from "./components/InputCustom/InputCustom";
import { useFormulario } from "./hooks/useFormulario";

function App() {
  const { formulario, handleChange } = useFormulario({
    name: "",
    lastname: "",
    email: "",
  });

  return (
    <form>
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
        value={formulario.name}
        onChange={handleChange}
        label="Lastname"
      />
      <InputCustom
        name="email"
        placeholder="Emial"
        value={formulario.name}
        onChange={handleChange}
        label="Email"
      />
    </form>
  );
}

export default App;
