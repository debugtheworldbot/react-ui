import React from 'react';
import {scopedClassMaker} from "../classes";

const scopedClass = scopedClassMaker('czUi-layout')

const Aside: React.FunctionComponent = (props) => {
    return <div className={scopedClass('aside')}>
        {props.children}
    </div>
}
export default Aside