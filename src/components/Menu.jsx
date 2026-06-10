import { Link } from "react-router";

function Menu() {
  return (
    <header>
      <h1>Sistema de Treinos</h1>

      <nav>
        <ul className="menu">
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/cadastro">Cadastro</Link>
          </li>
          <li>
            <Link to="/listagem">Listagem</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Menu;