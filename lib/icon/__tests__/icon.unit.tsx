import  React from 'react';
import  renderer from 'react-test-renderer'
import Icon from "../icon";
import {mount} from 'enzyme';


describe('icon',()=>{
    it('render test?',()=>{
        const json=renderer.create(<Icon name={'alipay'}/>).toJSON()
        expect(json).toMatchSnapshot()
    })
    it('should response to click event', () => {
        const fn = jest.fn()
        const c = mount(<Icon name={'alipay'} onClick={fn} />)
        c.find('svg').simulate('click')
        expect(fn).toBeCalled()
    })
})