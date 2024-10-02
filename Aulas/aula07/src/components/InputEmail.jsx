function InputEmail({ register, error }) {
    const regras = {
        required: { value: true, message: "Email é obrigatorio" },
        pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Formato inválido de E-mail"
        }
    }

    return (
        <>
            <label htmlFor="email">E-mail</label>
            <input type="email" {...register("email", regras)} />
            {error && <p>{error.message}</p>}
        </>
    );
}

export default InputEmail;