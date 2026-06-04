import { createContext, useContext, useEffect, useState } from "react";

const TreinoContext = createContext();

export function TreinoProvider({ children }) {
  const [treinos, setTreinos] = useState(() => {
    const treinosSalvos = localStorage.getItem("treinos");

    if (treinosSalvos) {
      return JSON.parse(treinosSalvos);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem("treinos", JSON.stringify(treinos));
  }, [treinos]);

  function adicionarTreino(novoTreino) {
    setTreinos([...treinos, novoTreino]);
  }

  function editarTreino(id, treinoAtualizado) {
  const listaAtualizada = treinos.map((treino) =>
    treino.id === id ? { ...treino, ...treinoAtualizado } : treino
  );

  setTreinos(listaAtualizada);
}

  function excluirTreino(id) {
    const listaAtualizada = treinos.filter((treino) => treino.id !== id);
    setTreinos(listaAtualizada);
  }

  return (
    <TreinoContext.Provider
      value={{
        treinos,
        adicionarTreino,
        editarTreino,
        excluirTreino,
      }}
    >
      {children}
    </TreinoContext.Provider>
  );
}

export function useTreinos() {
  return useContext(TreinoContext);
}