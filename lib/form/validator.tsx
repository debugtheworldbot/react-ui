import {FormValue} from "./form";

interface FormRules {
    key: string,
    required?: boolean,
    minLength?: number,
    maxLength?: number,
    pattern?: RegExp,
    validator?: { name: string, validate: (username: string) => Promise<void> }
}



const isEmpty = (value: any) => {
    return value === undefined || value === '' || value === null
}
export const noErrors = (errors: any) => {
    return Object.keys(errors).length === 0
}

const Validator = (formValue: FormValue, rules: FormRules[],callBack:(errors:any)=>void)=> {
    let errors: any = {}
    const addError = (message: string|Promise<void>, key: string) => {
        if (errors[key] === undefined) {
            errors[key] = []
        }
        errors[key].push(message)
    }
    rules.map(rule => {
        const value = formValue[rule.key]
        if (rule.required && isEmpty(value)) {
            addError('required', rule.key)
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
        if (rule.validator) {
            const promise = rule.validator.validate(value)
            addError(promise,rule.key)
        }

    })
    Promise.all(flat(Object.values(errors))).then(()=>{
        callBack(errors)
    },()=>{
        callBack(errors)
    })
}
const flat = (arr: any[]) => {
    const result = []
    for (let i = 0; i < arr.length ;i++){
        if(arr[i] instanceof Array){
            result.push(...arr[i])
        }else {
            result.push(arr)
        }
    }
    return result
}
export default Validator