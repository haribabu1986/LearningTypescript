const DEFAULT_MINIMUM: number = 1;
const DEFAULT_MAXIMUM: number = 100000;

class RandomGenerator {

    static generateRandom(minimum: number = DEFAULT_MINIMUM,
        maximum: number = DEFAULT_MAXIMUM) {

        let randomNumber: number =
            Math.floor(Math.random() * (minimum - maximum + minimum))

        return randomNumber;
    }
}

export default RandomGenerator;