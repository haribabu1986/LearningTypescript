import Customer from '../models/customer';
import ObjectFormatter from '../utilities/object-formatters';

const DELEMITER: string = ',';
const ARGUMENT_EXCEPTION: string = 'Invalid Argument(s) Specified!';

class InternetCustomer extends Customer {
    constructor(public id: number, public name: string,
        public address: string, public credit: number, public status: boolean,
        public blogUrl: string) {
        super(id, name, address, credit, status)

    }

    toString(): string {
        return ObjectFormatter.format(this);
    }

    static create(csvString: string): InternetCustomer {
        let internetCustomer: InternetCustomer;

        if (!csvString)
            throw new Error(ARGUMENT_EXCEPTION);

        let parsedCsvString = csvString.split(DELEMITER);

        internetCustomer = new InternetCustomer(
            parseInt(parsedCsvString[0]),
            parsedCsvString[1], parsedCsvString[2], parseInt(parsedCsvString[3]),
            <any>parsedCsvString[4], parsedCsvString[5]);

        return internetCustomer;
    }

}
export default InternetCustomer;