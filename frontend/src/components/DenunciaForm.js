import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


// Formulário de denúncia de golpe
function DenunciaForm() {
  const navigate = useNavigate();
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
    <div className="container mt-5 text-center" style={{ paddingTop: 84, paddingBottom: 80 }}>
      <div
        className="w-100 mb-3"
        style={{
          backgroundColor: '#f31f34ff',
          padding: '12px 20px',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          boxSizing: 'border-box'
        }}
      >
        <span style={{ color: '#fff', fontWeight: 700, marginRight: 10, fontSize: 20 }}>Bradesco</span>
        <img
          src={`${process.env.PUBLIC_URL}/Logo-image/LogoBradesco.png`}
          alt="Logo Bradesco"
          style={{ width: 48, height: 'auto' }}
        />
      </div>

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

      <button type="button" className="btn btn-secondary mt-3" onClick={() => navigate('/')}>Voltar</button>
      {/* Rodapé */}
      <div style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        backgroundColor: '#f31f34ff',
        color: '#fff',
        padding: '8px 0',
        textAlign: 'center',
        fontWeight: 700
      }}>
        © Bradesco
      </div>
    </div>
  );
}

export default DenunciaForm;
