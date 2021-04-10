import React from 'react'


interface Props {
    addAdress: any
    remAddress: any
    change: any
    address: Array<{
        id: Number
        type: string
        street: string
        number: string
        city: string
        state: string
        zip: string
    }>
}

export default function Address(props : Props) {



    return (
        <div className="addresses">

            
                {props.address.map((address, idx) => {

                    
                return (
                        <div key={`${address.id}`}>

                                          <strong>{idx+1}</strong>

                            <div style={{display: "flex"}}>

                            <br />
                            <h1 onClick={props.addAdress} style={{paddingRight: 10, cursor:"pointer"}}> + </h1>
                            <h1 onClick={props.remAddress}style={{paddingRight: 10, cursor:"pointer"}} id={`${idx}`}> - </h1>
                            </div>


                            
                        <label>Rua:</label>
                        <input  onChange={props.change} value={address.street}name="street" className="street" id={`${address.id}`} /> 
                        <label>Numero</label>
                        <input  onChange={props.change}value={address.number}  name="number" className="number" id={`${address.id}`} /> 
                        <label>Cidade</label>
                        <input  onChange={props.change} value={address.city} name="city" className="city" id={`${address.id}`} /> 
                        <label>Estado</label>
                        <input  onChange={props.change} value={address.state} name="state" className="state" id={`${address.id}`} /> 
                        <label>Cep</label>
                        <input  onChange={props.change} value={address.zip} name="zip" className="zip" id={`${address.id}`} /> 
                        </div>
                )

                
            


            })}
            


        </div>
    )


} 


