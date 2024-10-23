class GuessingGame {
    constructor() {
        this.current = 0;
        this.min = 0;
        this.max = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.current = Math.round((this.min + this.max) / 2);
        return this.current;
    }

    lower() {
        this.max = this.current;
    }

    greater() {
        this.min = this.current;
    }
}

module.exports = GuessingGame;
