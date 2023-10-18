import React from "react";

const PassoForm = (props) => {

    const setPasso = (e) => {
        props.novoPasso(e.target.value)
    }

    return (
        <div>
            <label htmlFor='passo'>Passo: </label>
            <input type='number' id='passo' name='passo' value={props.passo} onChange={setPasso}/>
        </div>
    )
}

export default PassoForm