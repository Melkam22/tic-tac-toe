import React, { Component } from 'react';
//import './App.js';

class Main extends Component {
    state = {
        title: "Tic-Tac-Toe",
        gameStatus: new Array(9).fill(null),//ternary func, no repitition on result
        player: "X" ? "O" : "X",//only X or O given it repeats the text on result
        winner: null,
        draw: ""//false
    }

    clickedSelection = (e, i) => {
        e.stopPropagation()

        //gameStatus & player updated 
        let currentGameStatus = this.state.gameStatus;
        if (this.state.gameStatus[i] === null) {
            currentGameStatus[i] = this.state.player
            let currentPlayer = this.state.player === "X" ? "O" : "X";
            this.calculateWinner(currentGameStatus);
            this.setState({
                gameStatus: currentGameStatus,
                player: currentPlayer
            });
        }
    }

    calculateWinner(currentGameStatus) {
        let winningLines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let d = 0; d < winningLines.length; d++) {
            const [a, b, c] = winningLines[d];
            if (currentGameStatus[a] && currentGameStatus[a]
                === currentGameStatus[b] && currentGameStatus[a]
                === currentGameStatus[c]) {
                //let score = document.querySelector(".result").innerHTML += "Bravo! you won.";this is only for js
                this.setState({
                    winner: this.state.player
                })
            }
            else if (!this.state.gameStatus.includes(null)
                && !this.state.winner) {
                this.setState({
                    draw: "draw, click reset & replay!",
                    //draw: true
                })
            }
        }
    }

    //reset button, we put in this func all the list from status
    onResetClick = () => {
        this.setState({
            gameStatus: new Array(9).fill(null),
            player: "X" ? "O" : "X",//result
            winner: null,
            draw: ""
        })
    }

    render() {
        console.log(this.props);
        return (
            <>
                <h1>Tic-Tac-Toe</h1>
                <div className="result">{this.state.winner && <h1>Congrats!
                {this.state.winner} won!</h1>} {this.state.draw && <h2>
                        {this.state.draw}</h2>}</div>

                <button className="reset" onClick={this.onResetClick}>
                    Reset</button>

                <div id="container">
                    {this.state.gameStatus.map((item, i) => {
                        return (<div onClick=
                            {this.state.winner ? null :
                                (e) => this.clickedSelection(e, i)}
                            className="boxes" key={i}>
                            <span className="circles">{item}</span></div>)
                    })}
                </div>
            </>
        );
    }
}

export default Main;