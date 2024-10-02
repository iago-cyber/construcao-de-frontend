function InputSenha({ register, error }) {
    const regras = {
        required: "Senha é obrigatoria",
        minLength: {
            value: 6,
            message: "A senha deve ter no minimo 6 caracteres"
        }
    }

    return (
        <>
            <label htmlFor="senha">Senha</label>
            <input type="password" {...register("senha", regras)} />
            {error && <p>{error.message}</p>}
        </>
    );
}

export default InputSenha;