import React from 'react'
import PropTypes from 'prop-types';

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


function Address(props : Props) {
    


    return (
        <div>

            
                {props.address.map((address, idx) => {

                    
                return (
                        <div key={`${address.id}`}>
                        <br/>
                        <strong>{idx+1}</strong>
                            <div style={{display: "flex"}}>
                            

                            <br />
                            <h1 onClick={props.addAdress} style={{paddingRight: 10, cursor:"pointer"}}> + </h1>
                            <h1 onClick={props.remAddress}style={{paddingRight: 10, cursor:"pointer"}} id={`${idx}`}> - </h1>
                            </div>

                        <label>Rua:</label>
                        <input  onChange={props.change} name="street" className="street" id={`${address.id}`} /> 
                        <label>Numero</label>
                        <input  onChange={props.change} name="number" className="number" id={`${address.id}`} /> 
                        <label>Cidade</label>
                        <input  onChange={props.change} name="city" className="city" id={`${address.id}`} /> 
                        <label>Estado</label>
                        <input  onChange={props.change} name="state" className="state" id={`${address.id}`} /> 
                        <label>Cep</label>
                        <input  onChange={props.change} name="zip" className="zip" id={`${address.id}`} /> 
                        </div>
                )

                
            


            })}
            


        </div>
    )


} 


Address.propTypes = {
    id: PropTypes.number,
    catState: PropTypes.array,
    handleCatChange: PropTypes.func,
};


export default Address;

