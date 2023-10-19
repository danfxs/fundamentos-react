import './Mega.css'
import geradorNumerosMegaSena from './GeradorNumerosMegaSena.js'
import React, { useState } from "react";
import DisplayMega from './DisplayMega';
import BotoesGerar from './BotoesGerar';
import InputQtdeNumeros from './InputQtdeNumeros';

const Mega = (props) => {
    let [qtde, setQtde] = useState(props.inicial || 6)
    let [numeros, setNumeros] = useState(geradorNumerosMegaSena(qtde))    

    const gerarNumeros = () => {
        setNumeros(geradorNumerosMegaSena(qtde))
    }

    return (
        <div className="Mega">
            <h2>Gerador Números da Megasena</h2>
            <InputQtdeNumeros qtdeNumero={qtde} novoQtde={setQtde} />
            <div>
                <BotoesGerar gerador={gerarNumeros} />
            </div>
            <div>
                <DisplayMega numeros={numeros} />
            </div>
        </div>
    )
}

export default Mega