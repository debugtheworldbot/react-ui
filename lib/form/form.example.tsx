import React, {useState} from 'react'
import Form, {FormValue} from "./form";
import Validator from "./validator";
import Button from "../button/button";

const nameList = ['adele', 'bieber', 'beatles','hunger1']
const checkUsername = (username: string, succeed: () => void, failed: () => void) => {
    setTimeout(() => {
        if (nameList.indexOf(username) >= 0) {
            failed()
        } else {
            succeed()
        }
    }, 1000)
}
const validator = (username: string) => {
    return new Promise<string>((resolve, reject) => {
        checkUsername(username, resolve, () => reject('unique'))
    })
}
const FormExample: React.FunctionComponent = () => {
    const [formData, setFormData] = useState<FormValue>({username: '', password: ''})
    const [errors, setErrors] = useState({})
    const [fields] = useState([
        {name: 'username', label: '姓名', input: {type: 'text'}},
        {name: 'password', label: '密码', input: {type: 'password'}},
    ])
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        const rules = [
            {key: 'username', validator},
            {key: 'username', validator},
            {key: 'password', validator},
            {key: 'password', validator},
            {key: 'username', required: true},
            {key: 'username', minLength: 3, maxLength: 18},
            {key: 'username', pattern: /^[A-Za-z0-9]+$/},
            {key: 'password', required: true},

        ]
        Validator(formData, rules, (errors) => {
            setErrors(errors)
        })
    }
    const transformError = (message: string) => {
        const map: { [k: string]: string } = {
            unique: '用户名已存在',
        }
        return map[message]
    }
    return (
        <Form value={formData} fields={fields} onSubmit={handleSubmit} onChange={(newForm) => setFormData(newForm)}
              errors={errors}
              errorsDisplayMode={'all'}
              transformError={transformError}
              buttons={
                  <>
                      <Button type={'submit'} level='important'>submit</Button>
                      <Button type={'button'}>cancel</Button>
                  </>
              }/>
    )
}
export default FormExample