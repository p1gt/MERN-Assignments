class Ninja {
    constructor(name, strength = 3, speed = 3, health = 90) {
        this.name = name;
        this.strength = strength;
        this.speed = speed;
        this.health = health;
    }

    sayName() { console.log(this.name); }

    showStats() { console.log(`name: ${this.name}\nstrength: ${this.strength}\nspeed: ${this.speed}\nhealth: ${this.health}`); }

    drinkSake() { this.health += 10; }
}

goku = new Ninja("Goku", Infinity, Infinity, Infinity)

goku.showStats()