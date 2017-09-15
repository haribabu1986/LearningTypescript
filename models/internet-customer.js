"use strict";
const customer_1 = require('../models/customer');
const object_formatters_1 = require('../utilities/object-formatters');
const DELEMITER = ',';
const ARGUMENT_EXCEPTION = 'Invalid Argument(s) Specified!';
class InternetCustomer extends customer_1.default {
    constructor(id, name, address, credit, status, blogUrl) {
        super(id, name, address, credit, status);
        this.id = id;
        this.name = name;
        this.address = address;
        this.credit = credit;
        this.status = status;
        this.blogUrl = blogUrl;
    }
    toString() {
        return object_formatters_1.default.format(this);
    }
    static create(csvString) {
        let internetCustomer;
        if (!csvString)
            throw new Error(ARGUMENT_EXCEPTION);
        let parsedCsvString = csvString.split(DELEMITER);
        internetCustomer = new InternetCustomer(parseInt(parsedCsvString[0]), parsedCsvString[1], parsedCsvString[2], parseInt(parsedCsvString[3]), parsedCsvString[4], parsedCsvString[5]);
        return internetCustomer;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = InternetCustomer;
