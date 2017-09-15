import InternetCustomer from './models/internet-customer';
import CustomerService from './services/customer-service';

class Mainclass {
    static run(): void {
        console.log("Welcome to TypeScript Learning Phase !!");

        let csvString: string = '1,Northwind,Hyderabad,12000,true,http://blogs.msdn.com/nw';
        let internetCustomer: InternetCustomer = InternetCustomer.create(csvString);

        console.log(`Internet Customer Details : ${internetCustomer.toString()}`);

        let customerService = new CustomerService();

        for (let customer of customerService) {
            console.info(customer.toString());
        }

        let filterdCustomersPromise = customerService.getCustomer("Hari");

        filterdCustomersPromise.then(
            result => console.log(`Filtered Customers ${JSON.stringify(result)}`),
            error => console.log('Error Occured, Details' + error.toString()));

        console.log('End of Application!');
    }
}
Mainclass.run();