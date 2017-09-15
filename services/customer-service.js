"use strict";
const customer_1 = require('../models/customer');
const random_generator_1 = require('../utilities/random-generator');
const DEFAULT_ADDRESS = 'Hyderabad';
const DEFAULT_TIMEOUT = 4000;
class CustomerService {
    constructor() {
        this.customers = [];
        let names = ['Gopal', 'Hari', 'Vineel', 'Satish', 'Srikanth', 'Kishore', 'Ramesh Babu'];
        names.forEach((name, index) => {
            let credit = random_generator_1.default.generateRandom();
            let customer = new customer_1.default(index, name, DEFAULT_ADDRESS, credit, index % 2 == 0);
            this.customers.push(customer);
        });
    }
    /*
    Custom JS classes should  have
    Generally it is implemented as generators.
    */
    *[Symbol.iterator]() {
        //By default arrays are enumerabled, can be used in for..of or for..in loop.
        //for..of  Value Enumberation
        //for..in
        for (let customer of this.customers) {
            yield customer;
        }
    }
    getCustomer(name = '') {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                let filteredCustomers = [];
                if (!name) {
                    filteredCustomers = this.customers;
                }
                else {
                    const MIN_INDEXOF_POS = 0;
                    filteredCustomers = this.customers.filter(customer => customer.name.indexOf(name) >= MIN_INDEXOF_POS);
                    resolve(filteredCustomers);
                }
            }, DEFAULT_TIMEOUT);
        });
        return promise;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CustomerService;
