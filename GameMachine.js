class GameMachine {
    constructor(number) {
        this.number = number;
        this.countedMachines = GameMachine.count += 1;
    }

    get getMoney() {
        return this.number;
    }

    returnMoney(number) {
        return this.number + this.moneyInsert();
    }

    moneyInsert(money) {
        this.number += money;
    };

    count() {
        return this.countedMachines;
    }

    play(money) {
        this.money = money;
        let rand = Math.floor(Math.random() * 999 + 1);
        let stringRand = rand.toString();
        if (stringRand[0] === stringRand[1]) {
            return this.money * 2 - this.getMoney;
        } else if (stringRand[1] === stringRand[2]) {
            return this.money * 3 - this.getMoney;
        }
    }
}

GameMachine.count = 0;



