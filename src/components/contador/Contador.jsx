import './Contador.css'
import React, { Component } from 'react'

class Contador extends Component {
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

    alterarPasso = (e) => {
        this.setState({
            passo: parseInt(e.target.value)
        })
    }

    render() {
        return (
            <div className='Contador'>
                <h2>Contador</h2>
                <h3>{this.state.numero}</h3>
                <div>
                    <label htmlFor='passo'>Passo: </label>
                    <input type='number' id='passo' name='passo' value={this.state.passo} onChange={this.alterarPasso}/>
                    <button onClick={this.inc}>+</button>
                    <button onClick={this.dec}>-</button>
                </div>

            </div>
        )
    }
}

export default Contador