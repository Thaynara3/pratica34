import { useEffect, useState } from "react";
import pingu from "../assets/pingu.jpg";
import { buscarExercicios } from "../services/api";
import { useTreinos } from "../context/TreinoContext";

function Inicio() {
  const [exercicios, setExercicios] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  const { adicionarTreino } = useTreinos();

  useEffect(() => {
    async function carregarExercicios() {
      try {
        const dados = await buscarExercicios();
        setExercicios(dados);
      } catch (error) {
        setErro("Não foi possível carregar os exercícios da API.");
      } finally {
        setCarregando(false);
      }
    }

    carregarExercicios();
  }, []);

  function adicionarSugestao(exercicio) {
    const novoTreino = {
      id: Date.now(),
      exercicio: exercicio.nome,
      grupoMuscular: exercicio.grupoMuscular,
      dia: "Segunda-feira",
      series: 3,
      repeticoes: 10,
    };

    adicionarTreino(novoTreino);
  }

  return (
    <section className="card">
      <h2>Bem-vindo(a) ao Sistema de Cadastro de Treinos</h2>

      <img src={pingu} alt="Pingu treinando" className="imagem-inicio" />

      <p className="texto-inicio">
        Esta aplicação permite cadastrar exercícios, organizar treinos por dia da
        semana e visualizar os dados de forma dinâmica.
      </p>

      <p className="texto-inicio">
        Desenvolvido em React para a disciplina de Tecnologias Web referente à
        prática 3 e 4.
      </p>

      <section className="api-section">
        <h3>Sugestões de exercícios</h3>

        <p className="api-descricao">
          Dados carregados de uma API REST local com json-server.
        </p>

        {carregando && <p>Carregando exercícios...</p>}

        {erro && <p className="erro-api">{erro}</p>}

        {!carregando && !erro && (
          <div className="api-lista">
            {exercicios.map((exercicio) => (
              <article className="api-card" key={exercicio.id}>
                <h4>{exercicio.nome}</h4>

                <p>
                  <strong>Grupo muscular:</strong> {exercicio.grupoMuscular}
                </p>

                <p>
                  <strong>Equipamento:</strong> {exercicio.equipamento}
                </p>

                <button
                  type="button"
                  className="botao-adicionar"
                  onClick={() => adicionarSugestao(exercicio)}
                >
                  Adicionar à lista
                </button>
              </article>
            ))}
          </div>
        )}
      </section>
    </section>
  );
}

export default Inicio;