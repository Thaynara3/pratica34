import { useState } from "react";
import { useTreinos } from "../context/TreinoContext";

function Listagem() {
  const { treinos, excluirTreino, editarTreino } = useTreinos();

  const [treinoEditando, setTreinoEditando] = useState(null);
  const [formEdicao, setFormEdicao] = useState({});

  const diasDaSemana = [
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
    "Domingo",
  ];

  function iniciarEdicao(treino) {
    setTreinoEditando(treino.id);
    setFormEdicao(treino);
  }

  function atualizarCampo(event) {
    const { name, value } = event.target;

    setFormEdicao({
      ...formEdicao,
      [name]: value,
    });
  }

  function salvarEdicao(id) {
    editarTreino(id, {
      ...formEdicao,
      series: Number(formEdicao.series),
      repeticoes: Number(formEdicao.repeticoes),
    });

    setTreinoEditando(null);
    setFormEdicao({});
  }

  function cancelarEdicao() {
    setTreinoEditando(null);
    setFormEdicao({});
  }

  function confirmarExclusao(id) {
    const confirmar = window.confirm("Tem certeza que deseja excluir este treino?");

    if (confirmar) {
      excluirTreino(id);
    }
  }

  return (
    <section className="card">
      <h2>Listagem de Treinos</h2>

      {treinos.length === 0 ? (
        <p>Nenhum treino cadastrado ainda.</p>
      ) : (
        diasDaSemana.map((dia) => {
          const treinosDoDia = treinos.filter((treino) => treino.dia === dia);

          if (treinosDoDia.length === 0) return null;

          return (
            <section key={dia} className="grupo-dia">
              <h3 className="titulo-dia">{dia}</h3>

              <div className="lista-treinos">
                {treinosDoDia.map((treino) => (
                  <article className="treino-card" key={treino.id}>
                    {treinoEditando === treino.id ? (
                      <div className="form-edicao">
                        <input
                          type="text"
                          name="exercicio"
                          value={formEdicao.exercicio}
                          onChange={atualizarCampo}
                        />

                        <input
                          type="text"
                          name="grupoMuscular"
                          value={formEdicao.grupoMuscular}
                          onChange={atualizarCampo}
                        />

                        <select
                          name="dia"
                          value={formEdicao.dia}
                          onChange={atualizarCampo}
                        >
                          {diasDaSemana.map((diaOpcao) => (
                            <option key={diaOpcao} value={diaOpcao}>
                              {diaOpcao}
                            </option>
                          ))}
                        </select>

                        <input
                          type="number"
                          name="series"
                          value={formEdicao.series}
                          onChange={atualizarCampo}
                        />

                        <input
                          type="number"
                          name="repeticoes"
                          value={formEdicao.repeticoes}
                          onChange={atualizarCampo}
                        />

                        <div className="acoes-edicao">
                          <button
                            type="button"
                            onClick={() => salvarEdicao(treino.id)}
                          >
                            Salvar
                          </button>

                          <button type="button" onClick={cancelarEdicao}>
                            Cancelar
                          </button>
                        </div>
                      </div>
                    ) : (
                      <>
                        <h4>{treino.exercicio}</h4>

                        <p>
                          <strong>Grupo muscular:</strong>{" "}
                          {treino.grupoMuscular}
                        </p>

                        <p>
                          <strong>Séries:</strong> {treino.series}
                        </p>

                        <p>
                          <strong>Repetições:</strong> {treino.repeticoes}
                        </p>

                        <div className="acoes-card">
                          <button
                            type="button"
                            className="botao-editar"
                            onClick={() => iniciarEdicao(treino)}
                            aria-label="Editar treino"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="22"
                              height="22"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M10.779 17.779 4.36 19.918 6.5 13.5m4.279 4.279 8.364-8.643a3.027 3.027 0 0 0-2.14-5.165 3.03 3.03 0 0 0-2.14.886L6.5 13.5m4.279 4.279L6.499 13.5m2.14 2.14 6.213-6.504M12.75 7.04 17 11.28"
                              />
                            </svg>
                          </button>

                          <button
                            type="button"
                            className="botao-excluir"
                            onClick={() => confirmarExclusao(treino.id)}
                            aria-label="Excluir treino"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="22"
                              height="22"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
                              />
                            </svg>
                          </button>
                        </div>
                      </>
                    )}
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