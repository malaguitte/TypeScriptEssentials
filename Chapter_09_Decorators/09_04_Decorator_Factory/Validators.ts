import { Todo, TodoState } from "./Model";

@validatable
class ValidatableTodo implements Todo {
    id: number;
    
    @required
    @regexValidator(`^[a-zA-Z ]*$`)
    name: string;
    
    state: TodoState;
}

interface ValidatableTodo extends IValidatable {}

interface IValidatable {
    getValidationErrors(): IValidationResult[];
}

interface IValidationResult {
    isValid: boolean;
    message: string;
    property?: string;
}

interface IValidator {
    (instance: Object): IValidationResult;
}

function getValidationErrors(): IValidationResult[] {
    const validators: IValidator[] = this._validators !== undefined ? this._validators : [];
    let errors: IValidationResult[] = [];
    validators.forEach(validator => {
        const result = validator(this);
        if (!result.isValid) {
            errors.push(result);
        }
    });
    return errors;
}

/**
 * Class decorator
 */
function validatable(targetClass: Function) {
    targetClass.prototype.getValidationErrors = getValidationErrors;
}

/**
 * Property decorator
 */
function required(target: Object, propertyName: string): void {
    const validatable = <{ _validators: IValidator[] }> target;
    validatable._validators = validatable._validators ? validatable._validators : [];
    const validators = validatable._validators;
    
    const validatorFunction = (instance) => {
        const propertyValue = instance[propertyName];
        let isValid = propertyValue != undefined;
    
        //check for non-empty string
        if (typeof propertyValue === "string") {
            isValid = propertyValue && propertyValue.length > 0;
        }

        const result: IValidationResult = {
            isValid,
            message: `${propertyName} is required`,
            property: propertyName
        }
        return result;
    }

    validators.push(validatorFunction);
}


/**
 * Decorator factory
 */
function regexValidator(pattern: string) {
    return function regex(target: Object, propertyName: string) {
        const regexExpression = new RegExp(pattern);
        const validatable = <{ _validators: IValidator[] }> target;
        validatable._validators = validatable._validators ? validatable._validators : [];
        const validators = validatable._validators;
        
        const validatorFunction = (instance) => {
            const propertyValue = instance[propertyName];
            let isValid = regexExpression.test(propertyValue);

            const result: IValidationResult = {
                isValid,
                message: `${propertyName} does NOT match the expression '${regexExpression}'`,
                property: propertyName
            }
            return result;
        }

        validators.push(validatorFunction);
    }
}

export {
    ValidatableTodo,
    IValidatable,
    IValidationResult,
    IValidator,
    validatable,
    getValidationErrors,
    regexValidator
}