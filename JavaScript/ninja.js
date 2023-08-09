class Ninja {
    constructor(name, strength = 3, speed = 3, health = 90) {
        this.name = name;
        this.strength = strength;
        this.speed = speed;
        this.health = health;
    }

    sayName() {
        console.log(this.name);
        return this;
    }

    showStats() {
        console.log(`name: ${this.name}\nstrength: ${this.strength}\nspeed: ${this.speed}\nhealth: ${this.health}`);
        return this;
    }

    drinkSake() {
        this.health += 10;
        console.log(`${this.name} drank sake`);
        return this;
    }
}

goku = new Ninja("Goku", Infinity, Infinity, Infinity)

goku.sayName().showStats().drinkSake().showStats();

class Sensei extends Ninja {
    constructor(name, strength = 10, speed = 10, health = 200, wisdom = 10) {
        super(name, strength, speed, health);
        this.wisdom = wisdom;
    }

    speakWisdom() {
        super.drinkSake();
        console.log("Anger is the ultimate destroyer of your own peace of mind.");
    }
}

roshi = new Sensei("Roshi", 0, 0, 0, 0);

roshi.sayName().showStats().speakWisdom().showStats();