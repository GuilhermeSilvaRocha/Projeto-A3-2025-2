import React from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="text-center bg-white text-danger vh-100 d-flex flex-column justify-content-center align-items-center" style={{ paddingTop: 84, paddingBottom: 80 }}>
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

      <h1>🚨 Golpe do Presente</h1>
      <p className="w-50">
        O “Golpe do Presente” é um tipo de fraude online em que criminosos enviam links
        falsos prometendo brindes ou ofertas. Nunca clique em links suspeitos.
      </p>
      <button className="btn btn-danger mt-3" onClick={() => navigate("/denunciar")}>
        Fazer uma Denúncia
      </button>
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
