import {FormValue} from "./form";

interface FormRules {
    key: string,
    required?: boolean,
    minLength?: number,
    maxLength?: number,
    pattern?: RegExp
}

interface FormErrors {
    [key: string]: string[]
}

const isEmpty = (value: any) => {
    return value === undefined || value === '' || value === null
}
export const noErrors = (errors: any) => {
    return Object.keys(errors).length === 0
}

const Validator = (formValue: FormValue, rules: FormRules[]): FormErrors => {
    let errors: any = {}
    const addError = (message: string, key: string) => {
        if (errors[key] === undefined) {
            errors[key] = []
        }
        errors[key].push(message)
    }
    rules.map(rule => {
        const value = formValue[rule.key]
        if (rule.required && isEmpty(value)) {
            addError('required!', rule.key)
        }
        if (rule.minLength && !isEmpty(value) && value.length < rule.minLength) {
            addError('too short', rule.key)
        }
        if (rule.maxLength && !isEmpty(value) && value.length > rule.maxLength) {
            addError('too long', rule.key)
        }
        if (rule.pattern && !rule.pattern.test(value)) {
            addError('invalid pattern', rule.key)
        }
    })
    return errors
}
export default Validator