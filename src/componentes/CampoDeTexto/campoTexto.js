import './campoTexto.css'
const CampoTexto = () => {
    return(
        <div className="CampoDeTexto">
            <label>Nome</label>
            <input type="text" placeholder={"Digite o seu nome"}/>
        </div>
    )
}

export default CampoTexto;