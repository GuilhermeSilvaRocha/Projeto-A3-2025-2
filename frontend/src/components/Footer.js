import React from 'react';

export default function Footer() {
  return (
    <footer className="app-footer text-center text-white">
      <div>Bradesco - Golpe do Presente</div>
      <div style={{fontSize: '.9rem', marginTop: 6}}>© {new Date().getFullYear()} Bradesco. Todos os direitos reservados.</div>
    </footer>
  );
}
