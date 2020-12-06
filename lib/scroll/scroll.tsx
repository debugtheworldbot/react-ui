import React, {UIEventHandler, useState, useEffect, useRef} from 'react'
import './scroll.scss'
import scrollbarWidth from "./scrollbarWidth";

interface ScrollProps extends React.HTMLAttributes<HTMLDivElement> {

}

const Scroll: React.FunctionComponent<ScrollProps> = (props) => {
    const {children, ...rest} = props
    const [barHeight, setBarHeight] = useState(0)
    const [topDistance, setTopDistance] = useState(0)
    const containerRef = useRef<HTMLDivElement>(null)

    const onScroll: UIEventHandler = (e) => {
        const viewHeight = containerRef.current!.getBoundingClientRect().height
        const sHeight = e.currentTarget.scrollTop
        setTopDistance(sHeight * barHeight / viewHeight)
    }
    useEffect(() => {
        const scrollHeight = containerRef.current!.scrollHeight
        const viewHeight = containerRef.current!.getBoundingClientRect().height
        setBarHeight(viewHeight * viewHeight / scrollHeight)
    }, [])
    return (
        <div {...rest} className={'czUi-scroll'}>
            <div className={'czUi-scroll-inner'} ref={containerRef} style={{right: -scrollbarWidth()}}
                 onScroll={onScroll}>
                {children}
            </div>
            <div className={'czUi-scroll-track'}>
                <div className="czUi-scroll-bar" style={{height: barHeight, transform:`translateY(${topDistance}px)`}}/>
            </div>
        </div>
    );
}
export default Scroll