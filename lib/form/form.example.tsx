import React, {useState} from 'react'
import Form, {FormValue} from "./form";
import Validator  from "./validator";

const FormExample: React.FunctionComponent = () => {
    const [formData, setFormData] = useState<FormValue>({username: '', password: ''})
    const [errors,setErrors]=useState({})
    const [fields] = useState([
        {name: 'username', label: '姓名', input: {type: 'text'}},
        {name: 'password', label: '密码', input: {type: 'password'}},
    ])
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        const rules = [
            {key: 'username', required: true},
            {key: 'username', minLength:8, maxLength:18},
            {key: 'username', pattern:/^[A-Za-z0-9]+$/},
            {key: 'password',required: true},
        ]
        setErrors(Validator(formData, rules))
    }
    return (
        <Form value={formData} fields={fields} onSubmit={handleSubmit} onChange={(newForm) => setFormData(newForm)}
              errors={errors}
              buttons={
                  <>
                      <button type={'submit'}>submit</button>
                      <button type={'button'}>cancel</button>
                  </>
              }/>
    )
}
export default FormExample