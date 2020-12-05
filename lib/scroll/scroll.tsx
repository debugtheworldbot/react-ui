import React, { UIEventHandler, useState, useEffect, useRef } from 'react'
import './scroll.scss'
import scrollbarWidth from "./scrollbarWidth";

interface ScrollProps extends React.HTMLAttributes<HTMLDivElement> {

}

const Scroll: React.FunctionComponent<ScrollProps> = (props) => {
    const {children, ...rest} = props
    const [h,setH]=useState(0)
    const [t,setT]=useState(0)
    const containerRef = useRef<HTMLDivElement>(null)

    const onScroll:UIEventHandler=(e)=>{
        const viewHeight=containerRef.current!.getBoundingClientRect().height
        const sHeight=e.currentTarget.scrollTop
        const a = sHeight * h / viewHeight
        setT(a)
    }
    useEffect(()=>{
        const scrollHeight=containerRef.current!.scrollHeight
        const viewHeight=containerRef.current!.getBoundingClientRect().height
        const barHeight=viewHeight*viewHeight/scrollHeight
        setH(barHeight)
    },[])
    return (
        <div {...rest} className={'czUi-scroll'}>
            <div className={'czUi-scroll-inner'} ref={containerRef} style={{right: -scrollbarWidth()}} onScroll={onScroll}>
                {children}
            </div>
            <div className={'czUi-scroll-track'}>
                <div className="czUi-scroll-bar" style={{height:h,top:t}}/>
            </div>
        </div>
    );
}
export default Scroll