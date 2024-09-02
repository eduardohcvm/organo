

export default function Botao (props){
    return(
        <div>
            <button className={"bg-white border-2 rounded-bl text-xl font-mono"}>{props.texto}</button>
        </div>
    )
}