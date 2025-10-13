import logo from '../images/logo.png'
//Header da pagina
function Header () {
return (
        <header className="header">
      <div className="logo-area">
        <h1><span style={{ color: "white" }}>Golpe do Presente</span></h1>
      </div>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
    </header>
);
}

export default Header;