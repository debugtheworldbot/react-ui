import React, {ReactFragment} from 'react'

export interface FormValue {
    [key: string]: any
}
interface FormProps {
    value: FormValue
    fields: Array<{ name: string, label: string, input: { type: string } }>,
    buttons: ReactFragment,
    onSubmit: React.FormEventHandler<HTMLFormElement>,
    onChange:(value:FormValue)=>void
}

const Form: React.FunctionComponent<FormProps> = (props) => {
    const {fields, buttons, onSubmit,value,onChange} = props
    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        onSubmit(e)
    }
    const handleChange = (name:string,v:string) =>{
        const newForm = {...value,[name]:v}
        onChange(newForm)
    }
    return (
        <form onSubmit={handleSubmit}>
            {fields.map(field =>
                <div key={field.name}>
                    {field.label}:
                    <input type={field.input.type} value={value[field.name]} onChange={(e)=>handleChange(field.name,e.target.value)}/>
                </div>)}
            <div>
                {buttons}
            </div>
        </form>
    )
}
export default Form