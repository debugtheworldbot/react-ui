import React, {UIEventHandler, useState, useEffect, useRef, MouseEventHandler} from 'react'
import './scroll.scss'
import scrollbarWidth from "./scrollbarWidth";

interface ScrollProps extends React.HTMLAttributes<HTMLDivElement> {

}

const Scroll: React.FunctionComponent<ScrollProps> = (props) => {
    const {children, ...rest} = props
    const [barHeight, setBarHeight] = useState(0)
    const [topDistance, _setTopDistance] = useState(0)
    // const [mouseDownPos, setMouseDownPos] = useState(0)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const scrollHeight = containerRef.current!.scrollHeight
        const viewHeight = containerRef.current!.getBoundingClientRect().height
        setBarHeight(viewHeight * viewHeight / scrollHeight)
    }, [])
    const setTopDistance = (number: number) => {
        if (number < 0) return
        const {current} = containerRef
        const scrollHeight = current!.scrollHeight
        const viewHeight = current!.getBoundingClientRect().height
        const maxTop = ((scrollHeight - viewHeight) * barHeight / viewHeight)
        if (number > maxTop) return
        _setTopDistance(number)
    }
    const onScroll: UIEventHandler = (e) => {
        const viewHeight = containerRef.current!.getBoundingClientRect().height
        const sHeight = e.currentTarget.scrollTop
        setTopDistance(sHeight * barHeight / viewHeight)
    }
    const dragging = useRef<boolean>(false)
    const firstYRef = useRef(0)
    const preTopDistance = useRef(0)
    const onMouseDown: MouseEventHandler = (e) => {
        dragging.current = true
        firstYRef.current = e.clientY
        preTopDistance.current = topDistance
    }
    const onMouseMove: MouseEventHandler = (e) => {
        const delta = e.clientY - firstYRef.current
        setTopDistance(delta + preTopDistance.current)
    }
    const onMouseUp: MouseEventHandler = (e) => {
        dragging.current = false
    }
    return (
        <div {...rest} className={'czUi-scroll'} onMouseMove={onMouseMove} onMouseUp={onMouseUp}>
            <div className={'czUi-scroll-inner'} ref={containerRef} style={{right: -scrollbarWidth()}}
                 onScroll={onScroll}>
                {children}
            </div>
            <div className={'czUi-scroll-track'} onMouseDown={onMouseDown}>
                <div className="czUi-scroll-bar"
                     style={{height: barHeight, transform: `translateY(${topDistance}px)`}}/>
            </div>
        </div>
    );
}
export default Scroll