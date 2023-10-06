import "./App.css"
import React from "react";

import Card from './components/layout/Card'
import Primeiro from './components/basics/Primeiro'
import ComParametro from './components/basics/ComParametro';
import Aleatorio from './components/basics/Aleatorio'
import Familia from './components/basics/Familia'
import Familia2 from "./components/basics/Familia2";
import FamiliaMembro from "./components/basics/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelasProdutos from "./components/repeticao/TabelasProdutos";

export default _ => (
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">
            <Card title="#08 - Repetição Desafio" backgroundColor="#717">
                <TabelasProdutos />
            </Card>
            <Card title="#07 - Repetição" backgroundColor="#A11">
                <ListaAlunos />
            </Card>
            <Card title="#06 - Componente Com Filhos 3" backgroundColor="#44F">
                <Familia2 sobrenome="Macêdo">
                    <FamiliaMembro nome="Elizabete" />
                    <FamiliaMembro nome="Roberto" />
                    <FamiliaMembro nome="Luís" />
                </Familia2>
            </Card>
            <Card title="#05 - Componente Com Filhos 2" backgroundColor="#F70">
                <Familia2 sobrenome="Silva">
                    <FamiliaMembro nome="Magali" />
                    <FamiliaMembro nome="Paulo" />
                    <FamiliaMembro nome="Gustavo" />
                </Familia2>
            </Card>
            <Card title="#04 - Componente Com Filhos" backgroundColor="#0C8">
                <Familia sobrenome="Ferreira" />
            </Card>
            <Card title="#03 - Número Aleatório" backgroundColor="#080">
                <Aleatorio min={2} max={15}/>
            </Card>
            <Card title="#02 - Com Parâmetro">
                <ComParametro
                    titulo="Segundo Componente"
                    subtitulo="Com o nome de ComParametro"/>
            </Card>
            <Card title="#01 - Primeiro Componente">
                <Primeiro/>
            </Card>
        </div>
    </div>
)