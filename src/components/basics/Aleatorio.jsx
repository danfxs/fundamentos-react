import React from "react";

export default (param) => {
    const { min, max } = param
    const nu_aleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    return (
        <>
            <h4>O número aleatório entre {min} e {max} sorteado foi: {nu_aleatorio}</h4>
        </>
    )
}