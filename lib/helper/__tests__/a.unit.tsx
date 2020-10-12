import classes from "../classes"

describe('classes',()=> {
    it('need one className',()=>{
        const result = classes('a')
        expect(result).toEqual('a')
    })
})
