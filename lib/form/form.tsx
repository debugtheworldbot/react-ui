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
    errorsDisplayMode?: 'first' | 'all'
}

const Form: React.FunctionComponent<FormProps> = (props) => {
    const {fields, buttons, onSubmit, value, onChange, errors, errorsDisplayMode} = props
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
            <table className={'czUi-form-table'}>
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
                            <div className={'czUi-form-error'}>{errors && errors[field.name] ?
                                errorsDisplayMode === 'all' ?
                                    errors[field.name].join(',') :
                                    errors[field.name][0]
                                : <span>&nbsp;</span>}
                            </div>
                        </td>
                    </tr>)}
                <tr className={'czUi-form-tr'}>
                    <td className={'czUi-form-td'}/>
                    <td className={classes('czUi-form-td', 'czUi-form-tdButton')}>
                        {buttons}
                    </td>
                </tr>
                </tbody>
            </table>
        </form>
    )
}
Form.defaultProps = {
    errorsDisplayMode: 'first'
}
export default Form