import React  from 'react';
import {scopedClassMaker} from "../classes";
import './layout.scss'
import classes from "../helper/classes";

const scopedClass = scopedClassMaker('czUi-layout')
interface Props extends React.HTMLAttributes<HTMLElement>{


}

const Layout: React.FunctionComponent<Props> = ({className,...restProps}) => {
    return <div className={classes(scopedClass(),className)}  {...restProps}>
        {restProps.children}
    </div>
}
export default Layout