import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Inicio from "./pages/Inicio";
import Cadastro from "./pages/Cadastro";
import Listagem from "./pages/Listagem";
import { TreinoProvider } from "./context/TreinoContext";
import "./styles.css";

function App() {
  return (
    <TreinoProvider>
      <BrowserRouter>
        <Menu />

        <main className="container">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/listagem" element={<Listagem />} />
          </Routes>
        </main>

        <footer>
          <p>Tecnologias Web - Prática 3/4</p>
        </footer>
      </BrowserRouter>
    </TreinoProvider>
  );
}

export default App;