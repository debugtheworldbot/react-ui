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

type OneError=string|Promise<string>

const Validator = (formValue: FormValue, rules: FormRules[], callBack: (errors: any) => void) => {
    let errors: any = {}
    const addError = (error: OneError, key: string) => {
        if (errors[key] === undefined) {
            errors[key] = []
        }
        errors[key].push(error)
    }
    rules.map(rule => {
        const value = formValue[rule.key]
        if (rule.required && isEmpty(value)) {
            addError( 'required', rule.key)
        }
        if (rule.minLength && !isEmpty(value) && value.length < rule.minLength) {
            addError( 'minLength', rule.key)
        }
        if (rule.maxLength && !isEmpty(value) && value.length > rule.maxLength) {
            addError('maxLength', rule.key)
        }
        if (rule.pattern && !rule.pattern.test(value)) {
            addError( 'pattern', rule.key)
        }
        if (rule.validator) {
            const promise = rule.validator(value)
            addError( promise, rule.key)
        }

    })
    const res= Object.keys(errors).map(key =>
            errors[key].map((promise:OneError)=>
                [key,promise]
            )
        )
    const a =flat(res)

    const b = a.map(([key,promise])=>promise.then((res:undefined)=>[key,res],(reason:string)=>[key,reason]))
    Promise.all(b).then((results)=>{
        const a =zip(results)
        console.log(a)
        // results.map(error=>)
    })

    // const promiseList = flat(Object.values(errors)).filter((error) => error.promise)
    //     .map(item => item.promise)
    // const getMessage = () => {
    //     callBack(fromEntries(Object.keys(errors).map(key =>
    //         [key, errors[key].map((item) => item.message)]
    //     )))
    // }
    // const xx=()=>{
    //     console.log(errors)
    // }

    // Promise.all(promiseList).then(getMessage, xx)
}
const zip = (arr:[string,string][])=>{
    const map:{ [k: string]: string[] } = {}
    for (let i = 0; i < arr.length; i++) {
        map[arr[i][0]]= map[arr[i][0]] || []
        if(arr[i][1]){
            map[arr[i][0]].push(arr[i][1])
        }
    }
    return map
}
const flat = (arr: any[]) => {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] instanceof Array) {
            result.push(...arr[i])
        } else {
            result.push(arr)
        }
    }
    return result
}
// const fromEntries = (arr: [string, string[]][]) => {
//     const result: { [key: string]: string[] } = {}
//     for (let i = 0; i < arr.length; i++) {
//         result[arr[i][0]] = arr[i][1]
//     }
//     return result
//
// }
export default Validator