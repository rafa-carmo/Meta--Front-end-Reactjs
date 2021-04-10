import React from 'react'
import editIcon from '../../Assets/edit.svg'
import deleteIcon from '../../Assets/trash-2.svg'
import { Link } from 'react-router-dom';


import '../../styles/partials/client.css'
import './style.css'

interface Client {  
    id: Number;
    name: String;
    surName: String;
    birth: Date;
    cpf: String;
    addresses: Array<{
        type: String
        street: String
        number: String
        city: String
        state: string
        zip: string
    }>
}


interface Props {
    dados: Client
    remove: any
}



export default function list(props:Props) {
    const client = props.dados

    

        return (

        
          <div className="client" data-id="1">
            <div className="id">{client.id}</div>
            <div className="name column">
              <Link to={`client/${client.id}`} >
              {client.name} {client.surName}
              </Link>
            </div>
            <div className="column">
              <span>CPF</span>
              <p>{client.cpf}</p>
            </div>
            <div className="column">
              <span>Data de Nascimento</span>
              <p>{client.birth}</p>
            </div>

            <div className="column flex">
              
              <Link to={`edit/${client.id}`} className="button white edit" title="Editar">
                <img src={editIcon} alt="Editar" />
              </Link>
              <button title="Excluir" onClick={() => props.remove(client.id)}>
                <img src={deleteIcon} alt="Excluir" />
              </button>
              <div style={{left:0}}>
      
            </div>
              
            </div>
            
          </div>


       

    
    
        )

      
    }
