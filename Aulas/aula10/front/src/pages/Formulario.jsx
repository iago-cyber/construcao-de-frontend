import { useForm } from "react-hook-form";
import InputTelefone from "../components/InputTelefone";
import InputNome from "../components/InputNome";

function Formulario(props) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    return (
        <form onSubmit={handleSubmit(props.trataEnviar)}>
            <InputNome register={register} error={errors.nome} />
            <InputTelefone register={register} error={errors.telefone} />
            <button type="submit">Salvar</button>
        </form>
    )
}

export default Formulario;