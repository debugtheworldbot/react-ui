import React,{InputHTMLAttributes} from 'react'
import classes from "../helper/classes";
import './input.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{

}
const Input :React.FunctionComponent<InputProps> = (props)=>{
    const {className,...rest}=props
    return(
        <input className={classes('czUi-input',className)} {...rest} />
    )

}
export default Input