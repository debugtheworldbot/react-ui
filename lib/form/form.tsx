import React from 'react'

interface FormProps {
    value: {[key:string]:any},
    fields: Array<{name:string,label:string,input:{type:string}}>,
    buttons:React.ReactElement
}

const Form: React.FunctionComponent<FormProps> = (props) => {
    const {value, fields,buttons} = props
    return (
        <div>
            {fields.map((field,index)=>
            <div key={index}>
                {field.label}:
                <input type={field.input.type}/>
            </div>)}
            {buttons}
        </div>
    )
}
export default Form