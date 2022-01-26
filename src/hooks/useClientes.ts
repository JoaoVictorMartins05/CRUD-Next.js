import React, { useEffect } from "react"
import ColecaoCliente from "../backend/db/ColecaoCliente"
import Cliente from "../core/Cliente"
import ClienteRepositorio from "../core/ClienteRepositorio"

export default function useClientes (){
  
  const repo: ClienteRepositorio = new ColecaoCliente()
    
  const [cliente, setCliente] = React.useState<Cliente>(Cliente.vazio)

  const [clientes, setClientes] = React.useState<Cliente[]>([])

  const [visivel, setVisivel] = React.useState<'tabela' | 'form'>('tabela')

  useEffect(obterTodos, [])


  function obterTodos(){
    repo.obterTodos().then((clientes)=>{
      setClientes(clientes)
      setVisivel('tabela')
    })
  }


  function clienteSelecionado(cliente: Cliente){
    console.log(cliente)
    setCliente(cliente)
    setVisivel('form')
  }

  async function clienteExcluido(cliente: Cliente){
    //console.log(cliente,'excluir')
    await repo.excluir(cliente)
    obterTodos()
  }

  async function salvarCliente(cliente: Cliente){
    //console.log(cliente)
    await repo.salvar(cliente)
    obterTodos()
  }


  function NovoCliente(){
    setCliente(Cliente.vazio())
    setVisivel('form')
  }
  
  return{
    cliente,
    clientes,
    NovoCliente,
    salvarCliente,
    clienteExcluido,
    clienteSelecionado,
    visivel,
    setVisivel,
  }
}