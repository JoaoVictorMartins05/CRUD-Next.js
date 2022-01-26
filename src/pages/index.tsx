//import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import React, { useEffect } from "react";
import ClienteRepositorio from "../core/ClienteRepositorio";
import ColecaoCliente from "../backend/db/ColecaoCliente";
import useClientes from "../hooks/useClientes";

export default function Home() {
  
  // const clientes = [
    //   new Cliente("João", 22, "1"),
    //   new Cliente("Gabi", 22, "2"),
    //   new Cliente("Nala", 2, "3"),
    //   new Cliente("Dudu", 16, "4"),
    // ];
    
    const {cliente,
      clientes,
      NovoCliente,
      salvarCliente,
      clienteExcluido,
      clienteSelecionado,
      visivel,
      setVisivel,
      } = useClientes()

    //const [visivel, setVisivel] = React.useState<'tabela' | 'form'>('tabela')
  
  return (
    <div
      className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-blue-500 to-purple-400
      text-white overflow-auto
      `}
    >
      <Layout titulo="Cadastro">
        {visivel ==='tabela'? (
                <>    
                  <div className="flex justify-end">
                    <Botao className="mb-4" cor="green" onclick={NovoCliente}> Novo Cliente</Botao>
                  </div>

                  <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado}
                  clienteExcluido={clienteExcluido}/>                  
                </>
        ):(
            <Formulario cliente={cliente}  
                        onclick={()=> setVisivel('tabela')}
                        clienteMudou={salvarCliente}
            ></Formulario>
        )}
            
      </Layout>
    </div>
  );
}
