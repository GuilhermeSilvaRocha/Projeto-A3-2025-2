//Formulário para registrar denuncias
import React, { useState } from "react";
//Função de envio do formulário
function DenunciaForm({ onAdd }) {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nome || !descricao) return alert("Preencha todos os campos!");
    onAdd({ nome, descricao, data: new Date().toLocaleString() });
    //Limpa os campos após o envio
    setNome("");
    setDescricao("");
  };

  return (
    <section id="denunciar" className="denuncia-form">
      <h2>Registrar Denúncia</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <textarea
          placeholder="Descreva o golpe ou situação"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default DenunciaForm;