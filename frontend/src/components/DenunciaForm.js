import React, { useState } from "react";
import axios from "axios";


// Formulário de denúncia de golpe
function DenunciaForm() {
  const [url, setUrl] = useState("");
  const [descricao, setDescricao] = useState("");
  const [mensagem, setMensagem] = useState("");

// Envia os dados ao backend  
  const enviarDenuncia = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/api/denuncias", {
        urlSuspeita: url,
        descricao: descricao,
      });
      setMensagem(
        response.data.eMalicioso
          ? "🚨 URL maliciosa detectada!"
          : "✅ Denúncia registrada com sucesso."
      );
    } catch (error) {
      setMensagem("❌ Erro ao enviar denúncia.");
    }
  };

  return (
    <div className="container mt-5 text-center">
      <h2 className="text-danger mb-3">Denunciar URL Suspeita</h2>
      <form onSubmit={enviarDenuncia}>
        <input
          type="url"
          className="form-control mb-3"
          placeholder="Cole a URL suspeita aqui"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
        <textarea
          className="form-control mb-3"
          placeholder="Descrição (opcional)"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />
        <button type="submit" className="btn btn-danger">Enviar</button>
      </form>
      {mensagem && <p className="mt-3 fw-bold">{mensagem}</p>}
    </div>
  );
}

export default DenunciaForm;
