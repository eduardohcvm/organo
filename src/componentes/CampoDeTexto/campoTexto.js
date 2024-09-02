import './campoTexto.css'
const CampoTexto = (props) => {
    console.log(props)
    return(
        <div className="flex flex-col mb-8 font-black max-w-80">
            <label>{props.label}</label>
            <input type="text" placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto;