import { Todo, TodoState } from "./Model";

@validatable
class ValidatableTodo implements Todo {
    id: number;
    name: string;
    state: TodoState;
}

interface ValidatableTodo extends IValidatable {
}

interface IValidatable {
    getValidationErrors(): IValidatableResult[];
}

interface IValidatableResult {
    isValid: boolean;
    message: string;
    property?: string;
}

interface IValidator {
    (instance: Object): IValidatableResult;
}

function getValidationErrors(): IValidatableResult[] {
    const validators: IValidator[] = [].concat(this._validators);
    let errors: IValidatableResult[] = [];
    validators.forEach(validator => {
        const result = validator(this);
        if (!result.isValid) {
            errors.push(result);
        }
    });
    return errors;
}

function validatable(target: Function) {
    target.prototype.getValidationErrors = getValidationErrors;
}

export {
    ValidatableTodo,
    getValidationErrors,
    IValidatable,
    IValidatableResult,
    IValidator,
    validatable
}