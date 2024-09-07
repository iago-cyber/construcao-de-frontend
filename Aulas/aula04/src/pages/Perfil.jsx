import Cabecalho from "../components/Cabecalho";
import Conteudo from "../components/Conteudo";
import Menu from "../components/Menu";
import Secao from "../components/Secao";
import InputUsuario from "../components/InputUsuario";
import InputSenha from "../components/InputSenha";
import BotaoSubmit from "../components/BotaoSubmit";

function Perfil() {
    return (
        <>
            <Cabecalho />
            <Conteudo>
                <Menu />
                <Secao texto="Perfil do Usuário">
                    <InputUsuario />
                    <InputSenha />
                    <BotaoSubmit texto="Salvar" />
                </Secao>
            </Conteudo>
        </>
    );
}

export default Perfil;