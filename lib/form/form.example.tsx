import React, {useState} from 'react'
import Form, {FormValue} from "./form";

const FormExample: React.FunctionComponent = () => {
    const [formData,setFormData] = useState<FormValue>({username: '', password: ''})
    const [fields] = useState([
        {name: 'username', label: '姓名', input: {type: 'text'}},
        {name: 'password', label: '密码', input: {type: 'password'}},
    ])
    const handleSubmit= (e:React.FormEvent<HTMLFormElement>) =>{
        console.log(e)
    }
    return (
        <Form value={formData} fields={fields} onSubmit={handleSubmit} onChange={(newForm)=>setFormData(newForm)} buttons={
            <>
                <button type='submit'>submit</button>
                <button>cancel</button>
            </>
        }/>
    )
}
export default FormExample