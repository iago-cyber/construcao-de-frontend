function InputEmail(props) {
    return (
        <>
            <label htmlFor="email">{props.texto}</label>
            <input type="text" id="email" name="email" value={props.valor} onChange={(e) => { props.mudaValor(e.target.value) }} />
        </>
    );
}

export default InputEmail;