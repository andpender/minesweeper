import React, { Component } from 'react';
import Board from './board'
import * as Minesweeper from '../minesweeper';

class Game extends Component {
	constructor(props) {
		super(props);

		this.state = {
			board: new Minesweeper.Board(10, 10),
		}

		this.updateGame = this.updateGame.bind(this);
		this.restartGame = this.restartGame.bind(this);
	}

	updateGame(tile, click) {
		if (click) {
			tile.toggleFlag();
		} else {
			tile.explore();
			}

		this.setState({ board: this.state.board });
	}

	restartGame() {
		const board = new Minesweeper.Board(8, 10);
		this.setState({ board: board });
	}

	render () {
		const { board } = this.state;
		var modal = "";
    if (board.lost() || board.won()) {
      var text = board.won() ? "You won!" : "You lost!";
      modal = 
        <div className='modal-screen'>
          <div className='modal-content'>
            <p>{text}</p>
            <button onClick={this.restartGame}>Play Again</button>
          </div>
        </div>
    }	

		return (
			<div>
				{modal}
				<Board
					board={board}
					updateGame={this.updateGame}
				/>
			</div>
		);
	}
}

export default Game;