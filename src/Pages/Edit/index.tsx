import React, { useState }from 'react'
import { useParams } from 'react-router-dom';
import api from '../../service/api'
import Address from './address'


interface param {
    id: string
}


export default function Home() {



        const [quantityAdress, setQuantity] = useState(0)

    
    const addressModel = {
                    id: quantityAdress,
                    type: "",
                    street: "",
                    number: "",
                    city: "",
                    state: "",
                    zip: ""
        }







    const [name, setName] = useState("")
    const [surName, setSurName] = useState("")
    const [birth, setBirth] = useState("")
    const [cpf, setCpf] = useState("")
    const [addresses, setAddresses] = useState( [addressModel])





    const params = useParams<param>()

    

        api.get(`clients/${params.id}`)
        .then(response => {

            setName(response.data.name)
            setSurName(response.data.surName)
            setBirth(response.data.birth)
            setCpf(response.data.cpf)
            setAddresses(response.data.addresses)
            ;
        } )
    



    async function handleClick() {

        if(!name.trim()) return alert("preencha todos os campos")
        if(!surName.trim()) return alert("preencha todos os campos")
        if(!birth.trim()) return alert("preencha todos os campos")
        if(!cpf.trim()) return alert("preencha todos os campos")
        if(!addresses[0].street.trim()) return alert("preencha todos os campos")
        if(!addresses[0].number.trim()) return alert("preencha todos os campos")
        if(!addresses[0].city.trim()) return alert("preencha todos os campos")
        if(!addresses[0].state.trim()) return alert("preencha todos os campos")
        if(!addresses[0].zip.trim()) return alert("preencha todos os campos")





        await api.put(`clients/${params.id}`, {
            name,
            surName,
            birth,
            cpf,
            addresses
        }).then(_ => alert("Dados Alterados com sucesso"))
        
        
        
        
    }


    function addAdress(){
        let tempAddress = addresses
        let tempAdd = {...addressModel, id: quantityAdress +1}

        
        
        
        tempAddress.push(tempAdd)


        setAddresses(tempAddress)
        setQuantity(quantityAdress +1)
    }

    function remAddress(e:any){
        if (addresses.length <= 1) {
            return 
        }

        
        let tempAddress = addresses

        tempAddress.splice(e.target.id, 1)

        setAddresses(tempAddress)
        setQuantity(quantityAdress +1)
    }



    function changeAddress(e:any) {
        let tempAddress:any = [...addresses]
        
        
        
        
        tempAddress[e.target.id][e.target.className] = e.target.value;
        
        
        setAddresses(tempAddress)
        
    }



if (!name) {
    return <p> Carregando</p>
}

return (



        <div className="form-container">  



            <form>
                <label>Nome do Cliente:</label>

            <input  value={name} onChange={e => setName(e.target.value) }/>



            <br/>
            <br/>
            <label>Sobrenome:</label>
            <input name="last_name" value={surName} onChange={e => setSurName(e.target.value) }/>

            <br/>
            <br/>

            <label>CPF:</label>
            <input name="cpf"  value={cpf} onChange={e => setCpf(e.target.value) }/>
            <br/>



            <label>Data de Nascimento:</label>
            <input type="date" value={birth} onChange={e => setBirth(e.target.value) } />
            
            <br/>

            
            <label>Endereços:</label>

                <Address address={addresses} addAdress={addAdress} remAddress={remAddress} change={changeAddress} />



            <br/>

            <br/>
            
            </form>
            <button onClick={handleClick} className="save-button">
                Salvar
            </button>


            


            
        </div>
)


}