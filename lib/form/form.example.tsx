import React, {useState} from 'react'
import Form from "./form";

const FormExample: React.FunctionComponent = () => {
    const [formData] = useState({username: '', password: ''})
    const [fields] = useState([
        {name: 'username', label: '姓名', input: {type: 'text'}},
        {name: 'password', label: '密码', input: {type: 'password'}},
    ])
    const handleSubmit= (e:React.FormEvent<HTMLFormElement>) =>{
        console.log('submit')
    }
    return (
        <Form value={formData} fields={fields} onSubmit={handleSubmit} buttons={
            <>
                <button type='submit'>submit</button>
                <button>cancel</button>
            </>
        }/>
    )
}
export default FormExample