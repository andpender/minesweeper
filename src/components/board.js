import React, { Component } from 'react';
import Tile from './tile';

class Board extends Component {

	render() {
		const { board } = this.props;
		return (
			<div>
				{board.grid.map((row, rowIndex) =>
					<div className="row" key={rowIndex}>
						{row.map((tile, tileIndex) =>
							<Tile
								tile={tile} 
								key={rowIndex * board.gridSize + tileIndex}
								updateGame={this.props.updateGame}
							/>
						)}
					</div>
				)}
			</div>
		);
	}
}

export default Board;