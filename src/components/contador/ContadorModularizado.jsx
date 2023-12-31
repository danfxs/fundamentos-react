import './ContadorModularizado.css'
import React, { Component } from 'react'
import Display from './Display'
import Botoes from './Botoes'
import PassoForm from './PassoForm'

class ContadorModularizado extends Component {
    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5,
    }

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    alterarPasso = (novoPasso) => {
        this.setState({
            passo: parseInt(novoPasso)
        })
    }

    render() {
        return (
            <div className='Contador'>
                <h2>Contador</h2>
                <Display numero={this.state.numero} />
                <div>
                    <PassoForm passo={this.state.passo} novoPasso={this.alterarPasso} />
                    <Botoes setInc={this.inc} setDec={this.dec} />
                </div>

            </div>
        )
    }
}

export default ContadorModularizado