import React from "react";
import Cliente from "../core/Cliente";
import Entrada from "./Entrada";
import Botao from "./Botao";


interface FormularioProps{
  cliente: Cliente
  onclick?: ()=> void
  clienteMudou?: (cliente:Cliente) => void
}


export default function Formulario(props: FormularioProps){
  const id = props.cliente?.id
  const [nome, setNome] = React.useState(props.cliente?.nome?? '');
  const [idade, setIdade] = React.useState(props.cliente?.idade?? 0);
  
  return(
    <div>
      {id ? (
        <Entrada somenteLeitura texto="Código" valor={id} classname="mb-2"></Entrada>
      ): false}
     
      <Entrada texto="Nome" 
                valor={nome} 
                valorMudou={setNome} 
                classname="mb-2"/>
                
      <Entrada texto="Idade" 
               tipo='number' 
               valor={idade} 
               valorMudou={setIdade}/>
      
      <div className=" flex justify-end mt-7">
        
        <Botao cor="blue" 
               className="mr-2"
               onclick={()=>{props.clienteMudou?.(new Cliente(nome, +idade, id))}}>
          {id? 'Alterar':'Salvar'}
        </Botao>

        <Botao cor="blue" onclick={props.onclick}>
          Cancelar
        </Botao>

      </div>
    </div>
  )
}