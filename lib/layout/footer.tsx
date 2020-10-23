import React from 'react';
import {scopedClassMaker} from "../classes";
import classes from "../helper/classes";
const scopedClass = scopedClassMaker('czUi-layout')
interface Props extends React.HTMLAttributes<HTMLElement>{

}
const Footer: React.FunctionComponent<Props> = ({className,...restProps}) => {
    return <div className={classes(scopedClass('footer'),className)}  {...restProps}>
        {restProps.children}
    </div>
}
export default Footer