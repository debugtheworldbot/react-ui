import React, {ReactFragment} from 'react'

interface FormProps {
    value: { [key: string]: any },
    fields: Array<{ name: string, label: string, input: { type: string } }>,
    buttons: ReactFragment,
    onSubmit: React.FormEventHandler<HTMLFormElement>
}

const Form: React.FunctionComponent<FormProps> = (props) => {
    const {fields, buttons, onSubmit} = props
    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        onSubmit(e)
    }
    return (
        <form onSubmit={handleSubmit}>
            {fields.map(field =>
                <div key={field.name}>
                    {field.label}:
                    <input type={field.input.type}/>
                </div>)}
            <div>
                {buttons}
            </div>
        </form>
    )
}
export default Form