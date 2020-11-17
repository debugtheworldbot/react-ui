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

export interface OneError{
    message:string,
    promise?:Promise<any>
}
const Validator = (formValue: FormValue, rules: FormRules[],callBack:(errors:any)=>void)=> {
    let errors: any = {}
    const addError = (error:OneError, key: string) => {
        if (errors[key] === undefined) {
            errors[key] = []
        }
        errors[key].push(error)
    }
    rules.map(rule => {
        const value = formValue[rule.key]
        if (rule.required && isEmpty(value)) {
            addError({message:'required'}, rule.key)
        }
        if (rule.minLength && !isEmpty(value) && value.length < rule.minLength) {
            addError({message:'too short'}, rule.key)
        }
        if (rule.maxLength && !isEmpty(value) && value.length > rule.maxLength) {
            addError({message:'too long'}, rule.key)
        }
        if (rule.pattern && !rule.pattern.test(value)) {
            addError({message:'invalid pattern'}, rule.key)
        }
        if (rule.validator) {
            const promise = rule.validator.validate(value)
            addError({message:'already exists',promise},rule.key)
        }

    })
    const promiseList=flat(Object.values(errors)).filter((error:OneError)=>error.promise)
        .map(item=>item.promise)

    Promise.all(promiseList).then(()=>{
        const newErrors = fromEntries(Object.keys(errors).map(key=>
            [key,errors[key].map((item:OneError)=>item.message)]
        ))
        callBack(newErrors)
    },()=>{
        const newErrors = fromEntries(Object.keys(errors).map(key=>
            [key,errors[key].map((item:OneError)=>item.message)]
        ))
        callBack(newErrors)
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
const fromEntries=(arr:[string,string[]][])=>{
    const result:{[key:string]:string[]} = {}
    for(let i =0;i<arr.length;i++){
        result[arr[i][0]]=arr[i][1]
    }
    return result

}
export default Validator