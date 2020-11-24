import {FormValue} from "./form";

interface FormRules {
    key: string,
    required?: boolean,
    minLength?: number,
    maxLength?: number,
    pattern?: RegExp,
    validator?: (username: string) => Promise<string>
}


const isEmpty = (value: any) => {
    return value === undefined || value === '' || value === null
}
export const noErrors = (errors: any) => {
    return Object.keys(errors).length === 0
}

type OneError = string | Promise<string>

const Validator = (formValue: FormValue, rules: FormRules[], callBack: (errors: any) => void) => {
    let errors: { [k: string]: OneError[] } = {}
    const addError = (error: OneError, key: string) => {
        if (errors[key] === undefined) {
            errors[key] = []
        }
        errors[key].push(error)
    }
    rules.map(rule => {
        const value = formValue[rule.key]
        if (rule.required && isEmpty(value)) {
            addError('required', rule.key)
        }
        if (rule.minLength && !isEmpty(value) && value.length < rule.minLength) {
            addError('minLength', rule.key)
        }
        if (rule.maxLength && !isEmpty(value) && value.length > rule.maxLength) {
            addError('maxLength', rule.key)
        }
        if (rule.pattern && !rule.pattern.test(value)) {
            addError('pattern', rule.key)
        }
        if (rule.validator) {
            const promise = rule.validator(value)
            addError(promise, rule.key)
        }

    })
    const flatErrors = flat(Object.keys(errors).map(key =>
        errors[key].map<[string, OneError]>((promiseOrString) => [key, promiseOrString])))

    const newPromises = flatErrors.map(([key, promiseOrString]) => (promiseOrString instanceof Promise ? promiseOrString : Promise.reject(promiseOrString))
        .then<[string, undefined], [string, string]>(
            () => [key, undefined],
            (reason: string) => [key, reason]
        ))

    //https://www.tslang.cn/docs/handbook/advanced-types.html 类型保护与区分类型（Type Guards and Differentiating Types）
    function hasError(error: [string, string] | [string, undefined]): error is [string, string] {
        return typeof error[1] === 'string'
    }

    Promise.all(newPromises).then((results) => {
        callBack(zip(results.filter<[string, string]>(hasError)))
    })
}
const zip = (arr: [string, string][]) => {
    // [name,value][] => {name:value1,value2}
    const map: { [k: string]: string[] } = {}
    for (let i = 0; i < arr.length; i++) {
        map[arr[i][0]] = map[arr[i][0]] || []
        if (arr[i][1]) {
            map[arr[i][0]].push(arr[i][1])
        }
    }
    return map
}

function flat<T>(arr: Array<T | T[]>) {
    const result: T[] = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] instanceof Array) {
            result.push(...arr[i] as T[])
        } else {
            result.push(arr[i] as T)
        }
    }
    return result
}

export default Validator