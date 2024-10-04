import { useForm } from "react-hook-form";
import InputEmail from "../components/InputEmail";
import InputSenha from "../components/InputSenha";
import { useNavigate } from "react-router-dom";

function FormLogin(props) {
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <form onSubmit={handleSubmit((data) => {navigate('/home')})} >
            <InputEmail register= {register} error={errors.email}/>
            <InputSenha register= {register} error={errors.senha}/>
            <button>Entrar</button>
        </form>
    );
}

export default FormLogin;