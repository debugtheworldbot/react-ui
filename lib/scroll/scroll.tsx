import React, {UIEventHandler, useState, useEffect, useRef, MouseEventHandler, TouchEventHandler} from 'react'
import './scroll.scss'
import scrollbarWidth from "./scrollbarWidth";
import {Icon} from "../index";

interface ScrollProps extends React.HTMLAttributes<HTMLDivElement> {
    onRefresh?: () => void
}

const supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;

const Scroll: React.FunctionComponent<ScrollProps> = (props) => {
    const {children,onRefresh, ...rest} = props
    const [barHeight, setBarHeight] = useState(0)
    const [topDistance, _setTopDistance] = useState(0)
    const [barVisible, setBarVisible] = useState(true)
    const containerRef = useRef<HTMLDivElement>(null)


    useEffect(() => {
        const scrollHeight = containerRef.current!.scrollHeight
        const viewHeight = containerRef.current!.getBoundingClientRect().height
        setBarHeight(viewHeight * viewHeight / scrollHeight)
        setBarVisible(!!supportsTouch)
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
    const timerRef = useRef<number | null>(null)
    const onScroll: UIEventHandler = (e) => {
        setBarVisible(true)
        const viewHeight = containerRef.current!.getBoundingClientRect().height
        const sHeight = e.currentTarget.scrollTop
        setTopDistance(sHeight * barHeight / viewHeight)
        if (!dragging.current) {
            // if is dragging , always show bar until mouse up
            if (timerRef.current) {
                clearTimeout(timerRef.current)
            }
            timerRef.current = window.setTimeout(() => {
                setBarVisible(false)
            }, 1000)
        }
    }
    const dragging = useRef<boolean>(false)
    const firstYRef = useRef(0)
    const preTopDistance = useRef(0)
    const onMouseDown: MouseEventHandler = (e) => {
        dragging.current = true
        firstYRef.current = e.clientY
        preTopDistance.current = topDistance
    }
    const onMouseMove = (e: React.MouseEvent<Element, MouseEvent>) => {
        const delta = e.clientY - firstYRef.current
        if (dragging.current) {
            const newDistance = delta + preTopDistance.current
            const viewHeight = containerRef.current!.getBoundingClientRect().height
            const scrollHeight = containerRef.current!.scrollHeight
            setTopDistance(newDistance)
            containerRef.current!.scrollTop = newDistance * scrollHeight / viewHeight
        }
    }
    const onMouseUp = () => {
        dragging.current = false
        timerRef.current = window.setTimeout(() => {
            setBarVisible(false)
        }, 1000)
    }
    const onSelect = (e: Event) => {
        if (dragging.current) e.preventDefault()
    }
    useEffect(() => {
        document.addEventListener('selectstart', onSelect)
        return () => {
            document.removeEventListener('selectstart', onSelect)
        }
    }, [])
    const [pullUp, setPullUp] = useState(0)
    const pullRef = useRef(0)
    const onTouchStart: TouchEventHandler = (e) => {
        pullRef.current = e.touches[0].clientY //first finger touch's Y pos
    }
    const onTouchMove: TouchEventHandler = (e) => {
        if (topDistance === 0) {
            const distance = e.touches[0].clientY - pullRef.current
            if (distance > 0) {
                setPullUp(Math.sqrt(distance) * 4)
            }
        }
    }
    const onTouchEnd = () => {
        // refresh
        if (pullUp > 35) {
            onRefresh && onRefresh()
        }
        setPullUp(0)
    }

    return (
        <div {...rest} className={'czUi-scroll'} onMouseUp={onMouseUp} onMouseMove={onMouseMove}>
            <div className={'czUi-scroll-inner'} ref={containerRef} style={{
                right: -scrollbarWidth(),
                transform: `translateY(${pullUp}px)`,
            }}
                 onTouchStart={onTouchStart}
                 onTouchMove={onTouchMove}
                 onTouchEnd={onTouchEnd}
                 onScroll={onScroll}>
                {children}
            </div>
            {barVisible &&
            <div className={'czUi-scroll-track'} onMouseDown={onMouseDown}>
                <div className="czUi-scroll-bar"
                     style={{height: barHeight, transform: `translateY(${topDistance}px)`}}/>
            </div>}
            <div className={'czUi-scroll-pulling'} style={{height: pullUp}}>
                {pullUp < 35 ? <Icon name={'down'}/> :
                    <Icon className={'czUi-scroll-pulling-loading'} name={'loading'}/>
                }
            </div>
        </div>
    );
}
export default Scroll