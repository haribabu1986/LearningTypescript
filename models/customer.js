"use strict";
const object_formatters_1 = require('../utilities/object-formatters');
class Customer {
    constructor(id, name, address, credit, status) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.credit = credit;
        this.status = status;
    }
    toString() {
        return object_formatters_1.default.format(this);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Customer;
