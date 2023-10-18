import React from "react";
import DiretaFilho from "./DiretaFilho";

const DiretaPai = props => {
    return (
        <div>
            <DiretaFilho nome={props.nome} idade={props.idade} sexo={props.sexo} />
        </div>
    )
}

export default DiretaPai