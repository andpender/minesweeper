import React, { Component } from 'react';

class Tile extends Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event) {
		this.props.updateGame(this.props.tile, event.altKey);
	}
	
	render() {
		const tile = this.props.tile;
		let tileValue = '';
		let classValue = 'unexplored';

		if (tile.explored) {
			classValue = 'explored';
			if (tile.bombed) {
				tileValue = '\u2622';
			} else if (tile.adjacentBombCount() === 0) {
				tileValue = '';
			} else {
				tileValue = tile.adjacentBombCount();
			}
	} else if (tile.flagged) {
		tileValue = '\u2691';
	}

		return (
			<div 
				className={[ "tile", classValue].join(' ')}
				onClick={this.handleClick}>
				{tileValue}
			</div>
		);
	}
}

export default Tile;