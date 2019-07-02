class User {
    constructor(name, money) {
        this.name = name;
        this.money = money;
        this.gameMachine = new GameMachine();
    }

    play() {
        return this.gameMachine.play();
    }
}

class SuperAdmin extends User {
    constructor(name, money) {
        super();
        this.name = name;
        this.money = money;
        this.Casino = new Casino();
    }

    createCasino() {
        return this.Casino.gameMachines.push(this.Casino());

    }

    createGameMachine() {
        return this.Casino(this.money).gameMachine;
    }

    casinoMoneyBack(number) {
        return this.Casino.gameMachine.returnMoney();
    }

    addMoneyCasino() {
        return this.gameMachine.moneyInsert();
    }

    addGameMachineMoney() {
        return this.gameMachine.moneyInsert();
    }

}