import './Logo.css';
//import estilo from './logo.css';

function Logo(){
    const texto = "Logo da Aplicação";
    
    return (
        <img className="logo" src={props.imagem} alt={texto}/>
        //<img className={estilo.logo} src="" alt="Icone de Logo"/>
    );
}

export default Logo;