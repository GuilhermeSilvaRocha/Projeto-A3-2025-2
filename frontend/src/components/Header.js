import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="app-header d-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center gap-3">
        <div>
          <h2 className="header-brand">Bradesco</h2>
          <h1 className="header-title">Golpe do Presente</h1>
        </div>
      </div>

      <nav>
        <div className="menu d-flex align-items-center">
          <Link to="/denunciar" className="menu-link">Faça uma denuncia</Link>
          <Link to="/minhas-denuncias" className="menu-link">Minhas denuncias</Link>
        </div>
      </nav>

      <div className="logo">
        <img src="/pictures/logo.png" alt="Logo Bradesco" />
      </div>
    </header>
  );
}
