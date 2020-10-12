import classes from "../classes"


describe('classes',()=>{
    it('need one className',()=>{
        const result = classes('a')
        expect(result).toEqual('a')
    })
    it('need two className',()=>{
        const result = classes('a','b')
        expect(result).toEqual('a b')
    })
    it('need two className and one is undefined',()=>{
        const result = classes('a',undefined)
        expect(result).toEqual('a')
    })
    it('need a couple of wired variable',()=>{
        const result = classes('a',undefined,'你好')
        expect(result).toEqual('a 你好' )
    })
    it('give noting',()=>{
        const result = classes()
        expect(result).toEqual('')
    })
});