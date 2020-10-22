import React from 'react';
import {scopedClassMaker} from "../classes";
const scopedClass = scopedClassMaker('czUi-layout')

const Footer: React.FunctionComponent = (props) => {
    return <div className={scopedClass('footer')}>
        {props.children}
    </div>
}
export default Footer