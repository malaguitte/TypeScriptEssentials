import { Todo, TodoState } from "./Model";

@validatable
class ValidatableTodo implements Todo {
    id: number;
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

export {
    ValidatableTodo,
    IValidatable,
    IValidationResult,
    IValidator,
    validatable,
    getValidationErrors
}