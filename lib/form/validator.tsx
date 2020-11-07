import {FormValue} from "./form";

interface FormRules {
    key:string,
    required?:boolean,
    minLength?:number,
    maxLength?:number
}

interface FormErrors {
    [key:string]:string[]
}

const Validator = (formValue:FormValue,rules:FormRules[]) :FormErrors=>{
    let error:any= {}
    rules.map(rule=>{
        if(rule.required){
           return  formValue[rule.key]?{}:error[rule.key]=['required!']
        }
        return
    })
    return  error
}
export default Validator