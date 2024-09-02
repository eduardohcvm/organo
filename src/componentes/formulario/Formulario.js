import './Formulario.css'
import CampoTexto from "../CampoDeTexto/campoTexto";
import React from "react";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../botao";





const Formulario = ()=>{
    const times = [
        'Programação',
        'Front-end',
        'Data Science',
        'Deveops',
        'UX e Design',
        'Mobile'
    ]
    return(
        <section className={"flex flex-row justify-center items-center mx-80 my-0 mt-5 object-contain border-2 border-purple-600 border-spacing-4 px-20 py-20 bg-blue-200"}>
        <form action="text" className={"flex flex-col  gap-4 border-blue-500"}>
            <h2 className={"font-black text-xl mt-8 mb-5"}>Preencha os dados para criar o card do colaborador</h2>
            <CampoTexto label={"nome"} placeholder={"Digite seu nome..."}/>
            <CampoTexto label={"cargo"} placeholder={"Digite seu cargo..."}/>
            <CampoTexto label={"imagem"} placeholder={"Suba aqui sua foto..."}/>
            <ListaSuspensa itens={times}/>
            <Botao texto = "Criar Card"/>
        </form>
        </section>
            )
}

export default Formulario;