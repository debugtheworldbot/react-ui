import {FormValue} from "./form";

interface FormRules {
    key: string,
    required?: boolean,
    minLength?: number,
    maxLength?: number
}

interface FormErrors {
    [key: string]: string[]
}

const isEmpty = (value: any) => {
    return value === undefined || value === '' || value === null
}

const Validator = (formValue: FormValue, rules: FormRules[]): FormErrors => {
    let errors: any = {}
    const addError = (message: string, key: string) => {
        if (errors[key]===undefined) {
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
            addError('short', rule.key)
        }
    })
    return errors
}
export default Validator