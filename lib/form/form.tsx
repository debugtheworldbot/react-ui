import React, {ReactFragment} from 'react'
import Input from "../input/input";
import classes from "../helper/classes";
import './form.scss'

export interface FormValue {
    [key: string]: any
}

interface FormProps {
    value: FormValue
    fields: Array<{ name: string, label: string, input: { type: string } }>,
    buttons: ReactFragment,
    onSubmit: React.FormEventHandler<HTMLFormElement>,
    onChange: (value: FormValue) => void,
    errors?: { [k: string]: string[] }
}

const Form: React.FunctionComponent<FormProps> = (props) => {
    const {fields, buttons, onSubmit, value, onChange, errors} = props
    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        onSubmit(e)
    }
    const handleChange = (name: string, v: string) => {
        const newForm = {...value, [name]: v}
        onChange(newForm)
    }
    return (
        <form onSubmit={handleSubmit}>
            <table>
                {fields.map(field =>
                    <tr className={classes('czUi-form-row')} key={field.name}>
                        <td>
                            {field.label}:
                        </td>
                        <td>
                            <Input type={field.input.type} value={value[field.name]}
                                   onChange={(e) => handleChange(field.name, e.target.value)}/>
                            <span style={{color: 'red'}}>{errors && errors [field.name]}</span>

                        </td>
                    </tr>)}
            </table>

            <div>
                {buttons}
            </div>

        </form>
    )
}
export default Form