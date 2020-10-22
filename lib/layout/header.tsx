import React from 'react';
import {scopedClassMaker} from "../classes";
const scopedClass = scopedClassMaker('czUi-layout')

const Header: React.FunctionComponent = (props) => {
    return <div className={scopedClass('header')}>
        {props.children}
    </div>
}
export default Header