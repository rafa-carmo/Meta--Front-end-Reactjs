import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import api from '../../service/api'

interface param {
    id: string
}

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


    const params = useParams<param>()
    const [client, setClient] = useState<Client>()
    useEffect(() => {

        api.get(`clients/${params.id}`)
        .then(response => {
            
            return setClient(response.data);
        } )
      },
      []);

    if(!client) {
        return (<p>Carregando </p>)
    }

    return(
        <div className="container">  

        <br />
        Detalhes do Cliente
        <br /><br />
        <h1> {client.name} {client.surName}</h1>
        <br />
        Cpf: {client.cpf}

        <br />
        Data de nascimento: {client.birth}
        <br />
        <br />
        <strong> Endereços </strong>
        <div style={{display:"flex" ,flexDirection: "column"}}>
        <br/>
        {client.addresses.map(address => {
            return (
                <div style={{marginBottom: 15, fontSize: 20}}>
                    Rua: {address.street}
                    <br />
                    Numero:{address.number}
                    <br />
                    Cidade: {address.city}
                    <br />
                    Estado: {address.state}
                    <br />
                    Cep: {address.zip}
                    <br />

                </div>
            )
        })}
        </div>



            
        </div>
    )
}