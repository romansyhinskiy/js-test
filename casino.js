class Casino {
    constructor(name, money) {
        this.name = name;
        this.money = money;
        this.gameMachines = [];
    }

    get getMoney() {
        let sum = 0;
        this.gameMachines.forEach(function (gameMachine) {
            sum += gameMachine.getMoney();
        });
        return sum;
    }

    get getMachineCount() {
        return this.gameMachines.length;
    }
}

