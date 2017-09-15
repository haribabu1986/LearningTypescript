"use strict";
const DELIMETER = ', ';
const NO_OF_TRAIL_CHARACTERS = 2;
const START_POS = 0;
class ObjectFormatter {
    static format(obj) {
        let formattedMessage = '';
        if (obj) {
            for (let property in obj) {
                let propertyValue = obj[property];
                if (propertyValue && typeof propertyValue !== 'function') {
                    formattedMessage += `${propertyValue}${DELIMETER}`;
                }
            }
            formattedMessage = formattedMessage.substr(START_POS, formattedMessage.length - NO_OF_TRAIL_CHARACTERS);
        }
        return formattedMessage;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ObjectFormatter;
