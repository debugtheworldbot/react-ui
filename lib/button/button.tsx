import React, {ButtonHTMLAttributes} from 'react';
import classes from "../helper/classes";
import './button.scss'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    level?: 'danger' | 'important' | 'normal'

}

const Button: React.FunctionComponent<Props> = (props) => {
    const {className, children,level, ...rest} = props
    return (
        <button {...rest} className={classes(className,`czUi-${level}`, 'czUi-button')}>
            {children}
        </button>
    )
}
Button.defaultProps = {
    level:'normal'
}
export default Button