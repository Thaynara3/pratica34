import { useTreinos } from "../context/TreinoContext";

function Listagem() {
  const { treinos, excluirTreino } = useTreinos();

  return (
    <section className="card">
      <h2>Listagem de Treinos</h2>

      {treinos.length === 0 ? (
        <p>Nenhum treino cadastrado ainda.</p>
      ) : (
        <div className="lista-treinos">
          {treinos.map((treino) => (
            <article className="treino-card" key={treino.id}>
              <h3>{treino.exercicio}</h3>
              <p>
                <strong>Grupo muscular:</strong> {treino.grupoMuscular}
              </p>
              <p>
                <strong>Dia:</strong> {treino.dia}
              </p>
              <p>
                <strong>Séries:</strong> {treino.series}
              </p>
              <p>
                <strong>Repetições:</strong> {treino.repeticoes}
              </p>

              <button type="button" onClick={() => excluirTreino(treino.id)}>
                Excluir
              </button>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default Listagem;