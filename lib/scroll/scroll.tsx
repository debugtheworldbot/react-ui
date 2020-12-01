import React, { UIEventHandler, useState } from 'react'
import './scroll.scss'
import scrollbarWidth from "./scrollbarWidth";

interface ScrollProps extends React.HTMLAttributes<HTMLDivElement> {

}

const Scroll: React.FunctionComponent<ScrollProps> = (props) => {
    const {children, ...rest} = props
    const [h,setH]=useState(0)
    const [t,setT]=useState(0)

    const onScroll:UIEventHandler=(e)=>{
        const scrollHeight=e.currentTarget.scrollHeight
        const viewHeight=e.currentTarget.getBoundingClientRect().height
        const barHeight=viewHeight*viewHeight/scrollHeight
        const sHeight=e.currentTarget.scrollTop
        const r= sHeight*viewHeight/scrollHeight
        setH(barHeight)
        setT(r)
    }
    return (
        <div {...rest} className={'czUi-scroll'}>
            <div className={'czUi-scroll-inner'} style={{right: -scrollbarWidth()}} onScroll={onScroll}>
                {children}
            </div>
            <div className={'czUi-scroll-track'}>
                <div className="czUi-scroll-bar" style={{height:h,top:t}}/>
            </div>
        </div>
    );
}
export default Scroll