import React from "react";

const DisplayMega = (props) => {
    let displayNumeros = props.numeros.join(', ')
    return (
        <div>
            <h3>{displayNumeros}</h3>
        </div>
    )
}

export default DisplayMega