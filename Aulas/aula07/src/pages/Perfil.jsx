import FormPerfil from "./FormPerfil";
import Menu from '../components/Menu';


function Perfil() {
    return (
        <>
            <header>
                <h1>Aluno Online</h1>
            </header>
            <main>
                <Menu />
                <section>
                    <h2>Perfil do usuário</h2>
                    <FormPerfil />
                </section>
            </main>
        </>
    );
}

export default Perfil;