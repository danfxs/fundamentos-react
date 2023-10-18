import React from "react";

const DiretaFilho = props => {
    return (
        <div>
            <span>{props.nome} </span>
            <span><strong>{props.idade}</strong> </span>
            <span>{props.sexo ? 'Masculino' : 'Feminino'}</span>
        </div>
    )
}

export default DiretaFilho