import React from 'react'
import './scroll.scss'
import scrollbarWidth from "./scrollbarWidth";

interface ScrollProps extends React.HTMLAttributes<HTMLDivElement> {

}

const Scroll: React.FunctionComponent<ScrollProps> = (props) => {
    const {children, ...rest} = props
    return (
        <div {...rest} className={'czUi-scroll'}>
            <div className={'czUi-scroll-inner'} style={{right:-scrollbarWidth()}} >
                {children}
            </div>
        </div>
    )
}
export default Scroll