interface EntradaProps{
  tipo?: 'text'| 'number'
  texto: string;
  valor: any
  somenteLeitura?: boolean
  classname?: string;
  valorMudou?: (valor: any) => void
}


export default function Entrada(props: EntradaProps){
  return(
    <div className={`flex flex-col ${props.classname}`}>
      <label className="mb-4">
          {props.texto}
      </label>
      <input 
        type={props.tipo ?? 'text'}
        value={props.valor}
        readOnly={props.somenteLeitura} 
        className={`
          border border-purple-500 rounded-lg
          focus:outline-none bg-gray-50
          px-3 py-2
          ${props.somenteLeitura ? '' : 'focus:bg-white'}          
        `}
        onChange={(e)=>
          props.valorMudou?.(e.target.value)
        }
        />
        
    </div>
  )
}