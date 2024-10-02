function InputName({ register, error }) {
    const regras = {
        required: "Nome é obrigatorio",
    }

    return (
        <>
            <label htmlFor="nome">Nome</label>
            <input type="texto" {...register("nome", regras)}/>
            {error && <p>{error.message}</p>}
        </>
    );
}

export default InputName;