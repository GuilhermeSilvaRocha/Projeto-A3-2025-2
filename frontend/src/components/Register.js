import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/api/auth/register", { email, password });
      setMessage("Registrado com sucesso. Faça login.");
      navigate('/login');
    } catch (err) {
      setMessage(err.response?.data?.message || "Erro no cadastro.");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-3">Cadastrar</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" className="form-control mb-3" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <input type="password" className="form-control mb-3" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} required />
        <button className="btn btn-primary" type="submit">Cadastrar</button>
      </form>
      {message && <p className="mt-3">{message}</p>}
    </div>
  );
}
