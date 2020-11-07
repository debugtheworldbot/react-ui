import React, {useState} from 'react'
import Form, {FormValue} from "./form";
import Validator from "./validator";

const FormExample: React.FunctionComponent = () => {
    const [formData,setFormData] = useState<FormValue>({username: '', password: ''})
    const [fields] = useState([
        {name: 'username', label: '姓名', input: {type: 'text'}},
        {name: 'password', label: '密码', input: {type: 'password'}},
    ])
    const handleSubmit= (e:React.FormEvent<HTMLFormElement>) =>{
        const rules=[{
            key:'username',
            required:true
        }]
        const errors = Validator(formData,rules)
        console.log(errors)
    }
    return (
        <Form value={formData} fields={fields} onSubmit={handleSubmit} onChange={(newForm)=>setFormData(newForm)} buttons={
            <>
                <button type={'submit'}>submit</button>
                <button type={'button'}>cancel</button>
            </>
        }/>
    )
}
export default FormExample