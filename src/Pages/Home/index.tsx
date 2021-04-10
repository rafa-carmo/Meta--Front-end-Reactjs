import React, { useState, useEffect }from 'react'
import api from '../../service/api'
import { Link } from 'react-router-dom';
import List from './list'
import Head from './head'
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
        city: string
        state: string
        zip: string
    }>
}

export default function Home() {
const [clients, setClients] = useState([])
const [control, setControl] = useState(0)


    useEffect(() => {

        api.get("clients")
        .then(response => {
            
            return setClients(response.data);
        } )
      },
      [control]);


      async function handleRemove(id:Number){
        await api.delete(`clients/${id}`)
        setControl(control+1)
        alert("Cliente Deletado")
    }

    if (!clients) {
        return <p>"Carregando"</p>
    }
    
    return(
        <div> 

    <Head total={clients.length}/>
        




<div className="container">
            <Link to={`register`}>  Cadastrar Novo Cliente </Link>


         {clients.map((client:Client) => {

             return (

                    <List dados={client} remove={handleRemove} />
             )
            }) }





    </div>
    
</div>
    )
}