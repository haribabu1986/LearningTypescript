"use strict";
const internet_customer_1 = require('./models/internet-customer');
const customer_service_1 = require('./services/customer-service');
class Mainclass {
    static run() {
        console.log("Welcome to TypeScript Learning Phase !!");
        let csvString = '1,Northwind,Hyderabad,12000,true,http://blogs.msdn.com/nw';
        let internetCustomer = internet_customer_1.default.create(csvString);
        console.log(`Internet Customer Details : ${internetCustomer.toString()}`);
        let customerService = new customer_service_1.default();
        for (let customer of customerService) {
            console.info(customer.toString());
        }
        let filterdCustomersPromise = customerService.getCustomer("Hari");
        filterdCustomersPromise.then(result => console.log(`Filtered Customers ${JSON.stringify(result)}`), error => console.log('Error Occured, Details' + error.toString()));
        console.log('End of Application!');
    }
}
Mainclass.run();
