import './App.css';
import React, { useState } from 'react';
import GerenciamentoSaldo from './components/GerenciamentoSaldo';

function App() {
  const [saldo, setSaldo] = useState(1000); 
  const [despesas, setDespesas] = useState([]);
  const adicionarDespesa = (descricao, valor) => {
    setDespesas([...despesas, { descricao, valor }]);
    setSaldo(saldo - valor);
  };

  const calcularTotalDespesas = () => {
    return despesas.reduce((total, despesa) => total + despesa.valor, 0);
  };

  return (
      <header className="App-header">
      <div className="App">
      <h1>Gerenciador de Orçamento</h1>
      <GerenciamentoSaldo
        saldo={saldo}
        despesas={despesas}
        adicionarDespesa={adicionarDespesa}
        calcularTotalDespesas={calcularTotalDespesas}
      />
    </div>
      </header>
  );
}

export default App;