import React, { useState }from 'react'
import Address from './address'
import "./style.css"
import api from '../../service/api'
import {useHistory} from 'react-router-dom'



       
export default function Home() {
    
    const [quantityAdress, setQuantity] = useState(0)
    const history = useHistory()

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





    async function handleClick() {
        const msgError =() => alert("Preencha todos os campos")
        if(!name.trim()) return msgError()
        if(!surName.trim()) return msgError()
        if(!birth.trim()) return msgError()
        if(!cpf.trim()) return msgError()
        if(!addresses[0].street.trim()) msgError()
        if(!addresses[0].number.trim()) msgError()
        if(!addresses[0].city.trim()) return msgError()
        if(!addresses[0].state.trim()) return msgError()
        if(!addresses[0].zip.trim()) return msgError()

        const check = await api.get("clients")
        .then(response =>{
            for(let i = 0; i <= response.data.length -1; i++){
                if (response.data[i].cpf ===cpf){
                    
                    alert("Cpf já cadastrado")
                    return false
                    
                }}
                return true
                }

            
        )
        
        if(!check) {return}
    
        await api.post("clients", {
            name,
            surName,
            birth,
            cpf,
            addresses
        }).then(_ => {
            alert("Cliente salvo com sucesso!")
            history.push('/')
        } ).catch(err => console.log(err))
        

        
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
            <button onClick={handleClick}>
                Salvar
            </button>


            
        </div>
    )
}