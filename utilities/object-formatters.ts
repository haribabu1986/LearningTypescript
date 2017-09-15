const DELIMETER: string = ', ';
const NO_OF_TRAIL_CHARACTERS: number = 2;
const START_POS: number = 0;

class ObjectFormatter {
    static format(obj: any): string {
        let formattedMessage: string = '';
        if (obj) {
            for (let property in obj) {
                let propertyValue = obj[property];
                if (propertyValue && typeof propertyValue !== 'function') {
                    formattedMessage += `${propertyValue}${DELIMETER}`
                }
            }
            formattedMessage = formattedMessage.substr(START_POS, formattedMessage.length - NO_OF_TRAIL_CHARACTERS)
        }
        return formattedMessage;
    }
}

export default ObjectFormatter;