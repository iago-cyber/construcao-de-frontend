import './Logo.css';
//import estilo from './logo.css';

function Logo(props){
    return (
        <img className="logo" src={props.imagem} alt={props.texto}/>
        //<img className={estilo.logo} src="" alt="Icone de Logo"/>
    );
}

export default Logo;