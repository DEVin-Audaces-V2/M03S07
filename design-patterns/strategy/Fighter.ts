import Attack from "./Attack";

export default class Fighter {

	private attack : Attack;
			

	constructor(attackStrategy: Attack) {
		this.attack = attackStrategy;
	}

	executeAttack() : string {
		return this.attack.execute();
	}
		
}