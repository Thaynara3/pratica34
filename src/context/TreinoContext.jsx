import { createContext, useContext, useState } from "react";

const TreinoContext = createContext();

export function TreinoProvider({ children }) {
  const [treinos, setTreinos] = useState([]);

  function adicionarTreino(novoTreino) {
  console.log(novoTreino);

  setTreinos([...treinos, novoTreino]);
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