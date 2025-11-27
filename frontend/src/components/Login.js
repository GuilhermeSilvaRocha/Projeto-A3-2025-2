import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/api/auth/login", { email, password });
      const { token } = res.data;
      if (token) {
        localStorage.setItem("token", token);
        setMessage("Login realizado com sucesso.");
        navigate('/');
      }
    } catch (err) {
      setMessage(err.response?.data?.message || "Erro no login.");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-3">Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" className="form-control mb-3" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <input type="password" className="form-control mb-3" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} required />
        <button className="btn btn-primary" type="submit">Entrar</button>
      </form>
      {message && <p className="mt-3">{message}</p>}
    </div>
  );
}
