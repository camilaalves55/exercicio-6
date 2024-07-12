import React, { useState } from 'react';

function GerenciamentoSaldo({ saldo, despesas, adicionarDespesa, calcularTotalDespesas }) {
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (descricao && valor) {
      adicionarDespesa(descricao, parseFloat(valor));
      setDescricao('');
      setValor('');
    }
  };

  return (
    <div className="gerenciamento-saldo">
      <h4>Saldo Atual: R${saldo.toFixed(2)}</h4>

      <form onSubmit={handleSubmit} className="formulario-despesa">
        <input type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)} placeholder="Descrição da despesa"/>
        <input type="number" value={valor} onChange={(e) => setValor(e.target.value)} placeholder="Valor"/>
        <button type="submit">Adicionar</button>
      </form>

      <h3>Despesas:</h3>
      <ul className="lista-despesas">
        {despesas.map((despesa, index) => (
          <li key={index}>
            {despesa.descricao}: R${despesa.valor.toFixed(2)}
          </li>
        ))}
      </ul>

      <h3>Valor das Despesas: R${calcularTotalDespesas().toFixed(2)}</h3>
    </div>
  );
}

export default GerenciamentoSaldo;
