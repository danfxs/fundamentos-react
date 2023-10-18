import React, {useState} from "react";
import IndiretaFilho from "./IndiretaFilho";

const IndiretaPai = props => {
    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [sexo, setSexo] = useState(false)
    function fornecerInformacoes(nomeParam, idadeParam, sexoParam) {
        setNome(nomeParam)
        setIdade(idadeParam)
        setSexo(sexoParam)
    }
    return (
        <div>
            <div>
                <span>{nome} </span>
                <span><strong>{idade}</strong> </span>
                <span>{sexo ? 'Masculino' : 'Feminino'}</span>
            </div>
            <IndiretaFilho cb={fornecerInformacoes}/>
        </div>
    )
}

export default IndiretaPai