import ObjectFormatter from '../utilities/object-formatters';
class Customer {
    constructor(public id: number, public name: string,
        public address: string, public credit: number, public status: boolean) {

    }
    toString() {
        return ObjectFormatter.format(this);
    }
}

export default Customer;