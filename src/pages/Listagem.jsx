import { useTreinos } from "../context/TreinoContext";

function Listagem() {
  const { treinos, excluirTreino } = useTreinos();

  const diasDaSemana = [
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
    "Domingo",
  ];

  return (
    <section className="card">
      <h2>Listagem de Treinos</h2>

      {treinos.length === 0 ? (
        <p>Nenhum treino cadastrado ainda.</p>
      ) : (
        diasDaSemana.map((dia) => {
          const treinosDoDia = treinos.filter((treino) => treino.dia === dia);

          if (treinosDoDia.length === 0) {
            return null;
          }

          return (
            <section key={dia} className="grupo-dia">
              <h3 className="titulo-dia">{dia}</h3>

              <div className="lista-treinos">
                {treinosDoDia.map((treino) => (
                  <article className="treino-card" key={treino.id}>
                    <h4>{treino.exercicio}</h4>

                    <p>
                      <strong>Grupo muscular:</strong> {treino.grupoMuscular}
                    </p>

                    <p>
                      <strong>Séries:</strong> {treino.series}
                    </p>

                    <p>
                      <strong>Repetições:</strong> {treino.repeticoes}
                    </p>
                    <button
                      type="button"
                      className="botao-excluir"
                      onClick={() => excluirTreino(treino.id)}
                      aria-label="Excluir treino"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </article>
                ))}
              </div>
            </section>
          );
        })
      )}
    </section>
  );
}

export default Listagem;