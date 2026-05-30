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
                      onClick={() => excluirTreino(treino.id)}
                    >
                      Excluir
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