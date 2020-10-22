import React from 'react';
import {scopedClassMaker} from "../classes";
const scopedClass = scopedClassMaker('czUi-layout')

const Content: React.FunctionComponent = (props) => {
    return <div className={scopedClass('content')}>
        {props.children}
    </div>
}
export default Content