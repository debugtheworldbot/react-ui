import  React from 'react';
import  renderer from 'react-test-renderer'
import Icon from "../icon";


describe('icon',()=>{
    it('render successful?',()=>{
        const json=renderer.create(<Icon name={'alipay'}/>).toJSON()
        expect(json).toMatchSnapshot()
    })
})