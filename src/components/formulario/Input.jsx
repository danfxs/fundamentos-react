import './Input.css'
import React, { useState } from "react";

const Input = props => {
    const [valor, setValor] = useState('Inicial')
    function quandoMudar(e) {
        setValor(e.target.value)
    }


    return (
        <div className="Input">
            <h2>{valor}</h2>
            <div className="CamposInputs">
                <input value={valor} onChange={quandoMudar} />
                <input value={valor} readOnly />
                <input value={undefined}/>
            </div>
        </div>
    )
}

export default Input