import { useState } from "react";
import { useTreinos } from "../context/TreinoContext";

function Cadastro() {
  const { adicionarTreino } = useTreinos();

  const [formulario, setFormulario] = useState({
    exercicio: "",
    grupoMuscular: "",
    dia: "",
    series: "",
    repeticoes: "",
  });

  const [erros, setErros] = useState({});
  const [mensagem, setMensagem] = useState("");

  function atualizarCampo(event) {
    const { name, value } = event.target;

    setFormulario({
      ...formulario,
      [name]: value,
    });
  }

  function validarFormulario() {
    const novosErros = {};

    if (formulario.exercicio.trim() === "") {
      novosErros.exercicio = "O exercício é obrigatório.";
    }

    if (formulario.grupoMuscular.trim() === "") {
      novosErros.grupoMuscular = "O grupo muscular é obrigatório.";
    }

    if (formulario.dia === "") {
      novosErros.dia = "Selecione um dia do treino.";
    }

    if (formulario.series === "" || Number(formulario.series) <= 0) {
      novosErros.series = "Informe um número de séries válido.";
    }

    if (formulario.repeticoes === "" || Number(formulario.repeticoes) <= 0) {
      novosErros.repeticoes = "Informe um número de repetições válido.";
    }

    setErros(novosErros);

    return Object.keys(novosErros).length === 0;
  }

  function cadastrarTreino(event) {
    event.preventDefault();

    if (!validarFormulario()) {
      setMensagem("Corrija os campos antes de enviar.");
      return;
    }

    const novoTreino = {
      id: Date.now(),
      exercicio: formulario.exercicio,
      grupoMuscular: formulario.grupoMuscular,
      dia: formulario.dia,
      series: Number(formulario.series),
      repeticoes: Number(formulario.repeticoes),
    };

    adicionarTreino(novoTreino);

    setMensagem("Treino cadastrado com sucesso.");

    setFormulario({
      exercicio: "",
      grupoMuscular: "",
      dia: "",
      series: "",
      repeticoes: "",
    });

    setErros({});
  }

  return (
    <section className="card">
      <h2>Cadastro de Treino</h2>

      <form onSubmit={cadastrarTreino}>
        <fieldset>
          <legend>Dados do treino</legend>

          <label htmlFor="exercicio">Exercício</label>
          <input
            type="text"
            id="exercicio"
            name="exercicio"
            value={formulario.exercicio}
            onChange={atualizarCampo}
          />
          {erros.exercicio && <small>{erros.exercicio}</small>}

          <label htmlFor="grupoMuscular">Grupo muscular</label>
          <input
            type="text"
            id="grupoMuscular"
            name="grupoMuscular"
            value={formulario.grupoMuscular}
            onChange={atualizarCampo}
          />
          {erros.grupoMuscular && <small>{erros.grupoMuscular}</small>}

          <label htmlFor="dia">Dia do treino</label>
          <select
            id="dia"
            name="dia"
            value={formulario.dia}
            onChange={atualizarCampo}
          >
            <option value="">Selecione um dia</option>
            <option value="Segunda-feira">Segunda-feira</option>
            <option value="Terça-feira">Terça-feira</option>
            <option value="Quarta-feira">Quarta-feira</option>
            <option value="Quinta-feira">Quinta-feira</option>
            <option value="Sexta-feira">Sexta-feira</option>
            <option value="Sábado">Sábado</option>
            <option value="Domingo">Domingo</option>
          </select>
          {erros.dia && <small>{erros.dia}</small>}

          <label htmlFor="series">Séries</label>
          <input
            type="number"
            id="series"
            name="series"
            value={formulario.series}
            onChange={atualizarCampo}
          />
          {erros.series && <small>{erros.series}</small>}

          <label htmlFor="repeticoes">Repetições</label>
          <input
            type="number"
            id="repeticoes"
            name="repeticoes"
            value={formulario.repeticoes}
            onChange={atualizarCampo}
          />
          {erros.repeticoes && <small>{erros.repeticoes}</small>}

          <button type="submit">Cadastrar treino</button>

          {mensagem && <p>{mensagem}</p>}
        </fieldset>
      </form>
    </section>
  );
}

export default Cadastro;