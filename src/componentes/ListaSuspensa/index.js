export default function ListaSuspensa(props){
    return(
     <div>
         <label>{props.label}</label>
         <select className={"bg-contain bg-blue-100 rounded rounded-bl"}>
             {props.itens.map(item => {
                 return <option className={"border-4"} key={item}>{item}</option>
             })}
         </select>
     </div>
    )

}