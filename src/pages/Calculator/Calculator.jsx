import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [currentOperator, setCurrentOperator] = useState(null);
  const [result, setResult] = useState(null);
  const [output, setOutput] = useState('');
  const [activeOperator, setActiveOperator] = useState(null);

  const handleNumberClick = (num) => {
    if (currentOperator) {
      setSecondNumber(prev => prev + num);
      setOutput(secondNumber + num);
    } else {
      setFirstNumber(prev => prev + num);
      setOutput(firstNumber + num);
    }
  };

  const handleOperatorClick = (operator) => {
    if (firstNumber && !secondNumber) {
      clearActiveOperator();
      setCurrentOperator(operator);
      setActiveOperator(operator);
    }
  };

  const handleEqualsClick = () => {
    if (firstNumber && currentOperator) {
      if (!secondNumber) {
        setSecondNumber(firstNumber);
      }
      const res = calculate(firstNumber, secondNumber || firstNumber, currentOperator);
      setResult(res);
      setFirstNumber(res);
      setOutput(res);
      setSecondNumber('');
      clearActiveOperator();
    }
  };

  const handleClearAll = () => {
    setFirstNumber('');
    setSecondNumber('');
    setCurrentOperator(null);
    setResult(null);
    setOutput('');
    clearActiveOperator();
  };

  const handleClear = () => {
    if (secondNumber) {
      setSecondNumber('');
      setOutput(firstNumber);
    } else {
      setFirstNumber('');
      setOutput('');
    }
  };

  const calculate = (num1, num2, operator) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    switch (operator) {
      case '+':
        return n1 + n2;
      case '-':
        return n1 - n2;
      case '*':
        return n1 * n2;
      case '/':
        return n1 / n2;
      default:
        return 0;
    }
  };

  const clearActiveOperator = () => {
    setActiveOperator(null);
  };

  return (
    <div className='calculator-container'>
      <p className="btn btn-dark" style={{ fontSize: '30px', borderRadius: '15px', margin: 'auto' }}>CALCULATOR</p>
    <div className="calculator">
      <div id="output">{output}</div>
      <div className="buttons">
        <button className="clear-all" onClick={handleClearAll}>AC</button>
        <button className="clear" onClick={handleClear}>C</button>
        <button 
          className={`operator ${activeOperator === '%' ? 'active' : ''}`} 
          onClick={() => handleOperatorClick('%')}
        >%</button>
        <button 
          className={`operator ${activeOperator === '/' ? 'active' : ''}`} 
          onClick={() => handleOperatorClick('/')}
        >÷</button>
        <button className="number" onClick={() => handleNumberClick('7')}>7</button>
        <button className="number" onClick={() => handleNumberClick('8')}>8</button>
        <button className="number" onClick={() => handleNumberClick('9')}>9</button>
        <button 
          className={`operator ${activeOperator === '*' ? 'active' : ''}`} 
          onClick={() => handleOperatorClick('*')}
        >×</button>
        <button className="number" onClick={() => handleNumberClick('4')}>4</button>
        <button className="number" onClick={() => handleNumberClick('5')}>5</button>
        <button className="number" onClick={() => handleNumberClick('6')}>6</button>
        <button 
          className={`operator ${activeOperator === '-' ? 'active' : ''}`} 
          onClick={() => handleOperatorClick('-')}
        >-</button>
        <button className="number" onClick={() => handleNumberClick('1')}>1</button>
        <button className="number" onClick={() => handleNumberClick('2')}>2</button>
        <button className="number" onClick={() => handleNumberClick('3')}>3</button>
        <button 
          className={`operator ${activeOperator === '+' ? 'active' : ''}`} 
          onClick={() => handleOperatorClick('+')}
        >+</button>
        <button className="number" id="zero" onClick={() => handleNumberClick('0')}>0</button>
        <button className="decimal" onClick={() => handleNumberClick('.')}>.</button>
        <button className="equals" onClick={handleEqualsClick}>=</button>
      </div>
    </div>
    </div>
  );
};

export default Calculator;