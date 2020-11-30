import React from 'react'
import './scroll.scss'

interface ScrollProps extends React.HTMLAttributes<HTMLDivElement> {

}

const Scroll: React.FunctionComponent<ScrollProps> = (props) => {
    const {children, ...rest} = props
    return (
        <div {...rest} className={'czUi-scroll'}>
            <div className={'czUi-scroll-inner'}>
                {children}
            </div>
        </div>
    )
}
export default Scroll