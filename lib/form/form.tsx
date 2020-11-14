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
                <tbody>
                {fields.map(field =>
                    <tr className={'czUi-form-tr'} key={field.name}>
                        <td className={'czUi-form-td'}>
                            <span className={'czUi-form-label'}>
                            {field.label}:
                            </span>
                        </td>
                        <td className={'czUi-form-td'}>
                            <Input className={'czUi-form-input'} type={field.input.type} value={value[field.name]}
                                   onChange={(e) => handleChange(field.name, e.target.value)}/>
                            <span style={{color: 'red'}}>{errors && errors [field.name]}</span>
                        </td>
                    </tr>)}
                <tr className={'czUi-form-tr'}>
                    <td className={'czUi-form-td'}/>
                    <td  className={classes('czUi-form-td','czUi-form-tdButton')}>
                        {buttons}
                    </td>
                </tr>
                </tbody>

            </table>


        </form>
    )
}
export default Form