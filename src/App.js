import "./App.css";

import { Card } from "./components/Card/Card";
import { Container } from "./components/Container/Container";
import { UserForm } from "./components/UserForm";

import { useState } from "react";

function App() {
  const [usuarios, setusuarios] = useState([]);

  const submit = (usuario) => {
    setusuarios([...usuarios, usuario]);
  };

  return (
    <div style={{ marginTop: "15%" }}>
      <Container>
        <Card>
          <UserForm submit={submit} />
        </Card>

        <Card>
          <ul>
            {usuarios.map((x) => (
              <li
                key={x.email}
              >{`${x.name} -- ${x.lastname} -- ${x.email}`}</li>
            ))}
          </ul>
        </Card>
      </Container>
    </div>
  );
}

export default App;
