"use strict";
const DEFAULT_MINIMUM = 1;
const DEFAULT_MAXIMUM = 100000;
class RandomGenerator {
    static generateRandom(minimum = DEFAULT_MINIMUM, maximum = DEFAULT_MAXIMUM) {
        let randomNumber = Math.floor(Math.random() * (minimum - maximum + minimum));
        return randomNumber;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RandomGenerator;
