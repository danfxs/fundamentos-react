import React from "react";

const IndiretaFilho = props => {
    const gerarIdade = () => Math.floor(Math.random() * (70 - 50 + 1)) + 50
    const gerarSexo = () => Math.random() > 0.5
    return (
        <div>
            Indireta Filho
            <div>
                <button onClick={function (e) {
                    props.cb('João', gerarIdade(), gerarSexo())
                }}>Fornecer Informações</button>
            </div>
        </div>
    )
}

export default IndiretaFilho