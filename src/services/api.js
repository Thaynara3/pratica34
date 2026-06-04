export async function buscarExercicios() {
  const resposta = await fetch("http://localhost:3000/exercicios");

  if (!resposta.ok) {
    throw new Error("Erro ao buscar exercícios da API.");
  }

  return await resposta.json();
}