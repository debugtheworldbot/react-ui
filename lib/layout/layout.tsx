import React, { ReactElement }  from 'react';
import {scopedClassMaker} from "../classes";
import './layout.scss'
import classes from "../helper/classes";

const scopedClass = scopedClassMaker('czUi-layout')
interface Props extends React.HTMLAttributes<HTMLElement>{
    children:ReactElement|Array<ReactElement>
}

const Layout: React.FunctionComponent<Props> = ({className,...restProps}) => {
    console.log(restProps.children)
    // restProps.children&&restProps.children.map(child=>{
    //
    // })
    return <div className={classes(scopedClass(),className)}  {...restProps}>
        {restProps.children}
    </div>
}
export default Layout