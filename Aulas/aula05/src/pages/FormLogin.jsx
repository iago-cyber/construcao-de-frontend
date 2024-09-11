import { useState } from 'react';
import Botao from '../components/Botao';
import InputSenha from '../components/InputSenha';
import InputEmail from '../components/InputEmail';

function FormLogin(props) {
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();

    const efetualLogin = (e) => {
        e.preventDefault();
        //chamada ao backend
        props.navegaPara("/home");
    }

    return (
        <form onSubmit={efetualLogin}>
            <InputEmail texto="E-mail" valor={email} mudaValor={setEmail} />
            <InputSenha texto="Senha" valor={senha} mudaValor={setSenha} />
            <Botao texto="Entrar" />
        </form>
    )
}

export default FormLogin;