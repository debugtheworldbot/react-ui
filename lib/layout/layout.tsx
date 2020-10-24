import React, {ReactElement} from 'react';
import {scopedClassMaker} from "../classes";
import './layout.scss'
import classes from "../helper/classes";
import Aside from "./aside";

const scopedClass = scopedClassMaker('czUi-layout')

interface Props extends React.HTMLAttributes<HTMLElement> {
    children: ReactElement | Array<ReactElement>
}

const Layout: React.FunctionComponent<Props> = ({className, ...restProps}) => {
    const children = restProps.children && (restProps.children as Array<ReactElement>).length
    const hasAside = children && (restProps.children as Array<ReactElement>).reduce((result, node) => result || node.type === Aside, false)
    return <div
        className={classes(scopedClass(), className, hasAside ? scopedClass('hasAside') : undefined)}  {...restProps}>
        {restProps.children}
    </div>
}
export default Layout