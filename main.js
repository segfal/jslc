const mods = require('./mods');

class Box {
    constructor() {
        this._val = 0;
    }
    get val() {
        return this._val;
    }
    set val(value) {
        this._val = value;
    }
}



const isEven = (num) => num % 2 === 0;

if(!isEven(2)) console.log('2 is even');

