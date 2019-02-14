import React, { Component } from 'react';
import Tools from './Tools';

class Brain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            operand1: '',
            operator: '',
            operand2: '',
            equal: false,
        };
    }

    
    handleBtnClick = e => {
        let value = e.target.dataset.v;
        let {operand1, operator, operand2 } = this.state;
        console.log(value);
        if (value === 'c') {
            if (operand2) {
                operand2 = operand2.slice(0, -1);
                this.setState({ operand2 });
            } else if (operator) {
                this.setState({ operator: '' });
            } else if (operand1) {
                operand1 = operand1.slice(0, -1);
                this.setState({ operand1 });
            }
            this.props.removeFromDisplay();
        } else if (!isNaN(value) && !this.state.operator) {
            operand1 += value;
            this.setState({ operand1 });
            this.props.addToDisplay(value);
        } else if (this.state.operand1 && isNaN(value) && !this.state.operator && value !== '=') {
            this.setState({ operator: value });
            this.props.addToDisplay(value);
        } else if (this.state.operator && !isNaN(value)) {
            operand2 += value;
            this.setState({ operand2 });
            this.props.addToDisplay(value);
        } else if (operand1 && operator && operand2) {
            this.setState({ equal: true });
        }
    };
    
    

    render() { 
        if (this.state.equal) {
         //   debugger
            let {operand1, operator, operand2} = this.state;
            console.log(operand1, operator, operand2);
            operand1 = this.props.calculate(operand1, operator, operand2);
            this.setState({
                operand1,
                operator: '',
                operand2: '',
                equal: false
            });
        }
        return (   
            <Tools onBtnClick={this.handleBtnClick} />
        );
    }
}

export default Brain;