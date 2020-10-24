import classes from "../classes"
import {scopedClassMaker} from "../../classes";


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
    it('give nothing',()=>{
        const result = classes()
        expect(result).toEqual('')
    })
});

describe('scopedClassMaker',()=>{
    const scopedClass = scopedClassMaker('czUi-layout')
    it('give nothing',()=>{
        const result = scopedClass()
        expect(result).toEqual('czUi-layout')
    })
    it('give a string',()=>{
        const result = scopedClass('test')
        expect(result).toEqual('czUi-layout-test')
    })

})