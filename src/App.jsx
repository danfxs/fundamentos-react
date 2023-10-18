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
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import Input from "./components/formulario/Input";
import Contador from "./components/contador/Contador";
import ContadorModularizado from "./components/contador/ContadorModularizado";

const App = props => (
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">
            <Card title="#14 - Contador Modularizado" backgroundColor="#52B">
                <ContadorModularizado numeroInicial={100} />
            </Card>

            <Card title="#13 - Contador" backgroundColor="#5A2">
                <Contador numeroInicial={100} />
            </Card>

            <Card title="#12 - Input" backgroundColor="#0FF1FF">
                <Input />
            </Card>

            <Card title="#11 - Comunicação Indireta" backgroundColor="#7214AA">
                <IndiretaPai />
            </Card>
            
            <Card title="#10 - Comunicação Direta" backgroundColor="#7214AA">
                <DiretaPai nome="Junior" idade={20} sexo={true} />
                <DiretaPai nome="Gabriela" idade={17} sexo={false} />
            </Card>

            <Card title="#09 - Par ou Ímpar" backgroundColor="#7214AA">
                <ParOuImpar numero={2} />
                <UsuarioInfo usuario={{nome:"Fernando"}} />
                <UsuarioInfo usuario={{email:"fe@gmail.com"}} />
                <UsuarioInfo />
            </Card>

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

export default App