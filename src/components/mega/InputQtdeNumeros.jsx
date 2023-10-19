import React from "react";

const InputQtdeNumeros = (props) => {

    const setQtde = (e) => {
        if (parseInt(e.target.value) >= 6 && parseInt(e.target.value) <= 20)
            props.novoQtde(parseInt(e.target.value))
    }

    return (
        <div>
            <label htmlFor="qtde">Quantidade de Números: </label>
            <input type="number" id="qtde" name="qtde" value={props.qtdeNumero} onChange={setQtde} />
        </div>
    )
}

export default InputQtdeNumeros