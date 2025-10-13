//Lista de denuncias
function DenunciaList({ denuncias }) {
  return (
    <section id="todas" className="lista-denuncias">
      <h2>Denúncias Registradas</h2>
      {denuncias.length === 0 ? (
        <p>Nenhuma denúncia registrada ainda.</p>
      ) : (
        //Mapeia e exibe as denuncias em um card
        denuncias.map((denuncia, index) => (
          <div key={index} className="denuncia-card">
            <h3>{denuncia.nome || "Anônimo"}</h3>
            <p>{denuncia.descricao}</p>
            <span>{denuncia.data}</span>
          </div>
        ))
      )}
    </section>
  );
}
export default DenunciaList;