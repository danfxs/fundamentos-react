import React from "react";
import produtos from '../../data/produtos'
import './TabelasProdutos.css'

export default props => {
    var formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
    });
    const tableProdutos = produtos.map((produto, i) => {
        return (
            <tr key={i} className={i%2 == 0 ? 'Par': 'Impar'}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>{formatter.format(produto.preco)}</td>
            </tr>
        )
    })
    return (
        <div>
            <table className="TabelaProdutos">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome do Produto</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {tableProdutos}
                </tbody>
            </table>
        </div>
    )
}