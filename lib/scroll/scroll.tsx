import React, { UIEventHandler } from 'react'
import './scroll.scss'
import scrollbarWidth from "./scrollbarWidth";

interface ScrollProps extends React.HTMLAttributes<HTMLDivElement> {

}

const Scroll: React.FunctionComponent<ScrollProps> = (props) => {
    const {children, ...rest} = props
    const onScroll:UIEventHandler=(e)=>{
        console.log(e.currentTarget.scrollTop)
    }
    return (
        <div {...rest} className={'czUi-scroll'}>
            <div className={'czUi-scroll-inner'} style={{right: -scrollbarWidth()}} onScroll={onScroll}>
                {children}
            </div>
            <div className={'czUi-scroll-track'}>
                <div className="czUi-scroll-bar" />
            </div>
        </div>
    );
}
export default Scroll