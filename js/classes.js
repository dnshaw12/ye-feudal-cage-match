class Player {
	constructor(name, playerType) {
		this.name = name;

		if(playerType === 'fighter') {
			this.HP = 20;
			this.speed = 4;
			this.damage = 5;
			this.range = 1;
			this.icon = 'images/fighter-icon.png'
		}
		if(playerType === 'wizard'){
			this.HP = 15;
			this.speed = 3;
			this.damage = 4;
			this.range = 4;
			this.icon = 'images/wiz-icon.png'
		}
		if(playerType === 'rogue'){
			this.HP = 12;
			this.speed = 6;
			this.damage = 4;
			this.range = 1;
			this.icon = 'images/rogue-icon.png'
		}

		this.currentPosition = null;
		this.moveUsed = false;
		this.attackUsed = false;
	}
}

class Square {
	constructor(row, col){
		this.row = row;
		this.column = col;
		if (row === 1 && col === 1) {
			this.player = 1;
		} else if (row === 10 && col === 10) {
			this.player = 2;
		} else {
			this.player = 0;
		}
	}
}