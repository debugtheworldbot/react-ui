import React from 'react';
import {scopedClassMaker} from "../classes";
import classes from "../helper/classes";

const scopedClass = scopedClassMaker('czUi-layout')
interface Props extends React.HTMLAttributes<HTMLElement>{

}
const Header: React.FunctionComponent<Props> = ({className,...restProps}) => {
    return <div className={classes(scopedClass('header'),className)}  {...restProps}>
        {restProps.children}
    </div>
}
export default Header