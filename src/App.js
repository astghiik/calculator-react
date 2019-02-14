import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Brain from './components/Brain';
import Display from './components/Display';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: ''
        };
    }

    handleDisplayAdd = char => {
        let { display } = this.state;
        if (+char === Math.PI) char = 'π';
        if (+char === Math.E) char = 'e';
        display += char;
        this.setState({ display });
    };

    handleDisplayRemove = () => {
        let { display } = this.state;
        display = display.slice(0, -1);
        this.setState({ display });
    }

    calculate = (operand1, operator, operand2) => {
        let result;
        switch (operator) {
            case '÷':
            result = operand1 / operand2;
            break;

            case '×':
            result = operand1 * operand2;
            break;

            case '-':
            result = operand1 - operand2;
            break;

            case '+':
            result = +operand1 + +operand2;
            break;
        }
        
        this.setState({ display: result });
        return result;
    };

    render() { 
        return ( 
            <div className='carcase'>
                <table className="table table-bordered table-dark">
                  <Display display={this.state.display} />
                  <Brain addToDisplay={this.handleDisplayAdd} removeFromDisplay={this.handleDisplayRemove} calculate={this.calculate}/>
                </table>
            </div>
         );
    }
}
 
export default App;
