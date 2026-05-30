import pingu from "../assets/pingu.jpg";

function Inicio() {
  return (
    <section className="card">
      <h2>Bem-vindo(a) ao Sistema de Cadastro de Treinos</h2>

      <img
        src={pingu}
        alt="Pingu treinando"
        className="imagem-inicio"
      />

      <p className="texto-inicio">
        Esta aplicação permite cadastrar exercícios, organizar treinos por dia da semana e visualizar os dados de forma dinâmica.
      </p>

      <p className="texto-inicio">
        Desenvolvido em React para a disciplina de Tecnologias Web referente a prática 3 e 4.
      </p>
    </section>
  );
}

export default Inicio;