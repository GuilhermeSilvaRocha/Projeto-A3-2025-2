import React, { useState } from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import DenunciaForm from "./components/DenunciaForm";

import "./styles/styles.css";
import DenunciaList from "./components/DenunciaList";

function App() {
 const [denuncias, setDenuncias] = useState([]);

  //Função para adicionar nova denúncia
  const adicionarDenuncia = (novaDenuncia) => {
    setDenuncias([...denuncias, novaDenuncia]);
  };
  //Estrutura principal da aplicação
  return (
    <div className="App">
      <Header />
      <Menu />
      <main>
        <DenunciaForm onAdd={adicionarDenuncia} />
        <DenunciaList denuncias={denuncias} />
      </main>
    </div>
  );
}


export default App;