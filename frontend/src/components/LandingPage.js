import React from "react";
import { useNavigate } from "react-router-dom";


export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="landing text-center bg-white text-danger d-flex flex-column justify-content-center align-items-center">
      <h1>🚨 Golpe do Presente</h1>
      <p className="mx-auto" style={{maxWidth: 720}}>
        O “Golpe do Presente” é um tipo de fraude online em que criminosos enviam links
        falsos prometendo brindes ou ofertas. Nunca clique em links suspeitos.
      </p>
      <div className="d-flex gap-2">
        <button className="btn btn-outline-primary" onClick={() => navigate('/register')}>Cadastrar</button>
        <button className="btn btn-outline-secondary" onClick={() => navigate('/login')}>Login</button>
      </div>
      <button className="btn btn-danger mt-3" onClick={() => navigate("/denunciar") }>
        Fazer uma Denúncia
      </button>
    </div>
  );
}
