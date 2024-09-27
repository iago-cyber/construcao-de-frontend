import { Outlet, NavLink } from "react-router-dom";
import "./Leiaute.css";

function Leioute() {
    return (
        <>
            <header>
                <h1>Aluno Online</h1>
            </header>
            <main>
                <nav>
                    <ul>
                        <li><NavLink to="/home">Home</NavLink></li>
                        <li><NavLink to="/perfil/1">Perfil</NavLink></li>
                        <li><NavLink to="/">Sair</NavLink></li>
                    </ul>
                </nav>
                <section>
                    <Outlet />
                </section>
            </main>
        </>
    );
}

export default Leioute;