import React from 'react';

function Tools (props) {
    const rows = [
        [1, 2, 3, 'π', 'e'],
        [4, 5, 6, "÷", "×"],
        [7, 8, 9, "*", "+"],
        ['c', 0, '.', '=']
    ];

    let checkValue = item => {
        if(item === 'π') {
            return Math.PI;
        } else if (item === 'e') {
            return Math.E;
        } else {
            return item;
        }
    };

    const container = rows.map(arr => <tr key={'arr' + arr[0]}>
        {arr.map(item => <td onClick={props.onBtnClick} key={item} data-v={checkValue(item)}>
            {item}
        </td>)}
    </tr>);
    
    return (
            <tbody className="container">{container}
            {/* <tr>
                <td onClick={this.handleBtnClick} data-v="1">1</td>
                <td onClick={this.handleBtnClick} data-v="2">2</td>
                <td onClick={this.handleBtnClick} data-v="3">3</td>
                <td onClick={this.handleBtnClick} data-v={Math.PI}>π</td>
                <td onClick={this.handleBtnClick} data-v={Math.E}>e</td>
            </tr>
            <tr>
                <td onClick={this.handleBtnClick} data-v="4">4</td>
                <td onClick={this.handleBtnClick} data-v="5">5</td>
                <td onClick={this.handleBtnClick} data-v="6">6</td>
                <td onClick={this.handleBtnClick} data-v="÷">÷</td>
                <td onClick={this.handleBtnClick} >×</td>

                <Division onClick={this.handleBtnClick} />
                <Multiplication onClick={this.handleBtnClick} />
            </tr>
            <tr>
                <td onClick={this.handleBtnClick} data-v="7">7</td>
                <td onClick={this.handleBtnClick} data-v="8">8</td>
                <td onClick={this.handleBtnClick} data-v="9">9</td>
                <Subtraction onClick={this.handleBtnClick} />
                <Addition onClick={this.handleBtnClick} />
            </tr> */}
           
            </tbody>
        );
}

export default Tools;