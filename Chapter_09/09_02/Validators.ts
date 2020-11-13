import { Todo, TodoState } from "./Model";

@validatable
class ValidatableTodo implements Todo {
    id: number;
    name: string;
    state: TodoState;
}

interface ValidatableTodo extends IValidatable {}

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
    const validators: IValidator[] = this._validators !== undefined ? this._validators : [];
    let errors: IValidatableResult[] = [];
    validators.forEach(validator => {
        const result = validator(this);
        if (!result.isValid) {
            errors.push(result);
        }
    });
    return errors;
}

function validatable(targetClass: Function) {
    targetClass.prototype.getValidationErrors = getValidationErrors;
}

export {
    ValidatableTodo,
    IValidatable,
    IValidatableResult,
    IValidator,
    validatable,
    getValidationErrors
}