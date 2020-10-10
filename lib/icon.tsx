import React from 'react'
import './icons/wechat.svg'
import './icons/alipay.svg'


interface IconProps {
    name: string
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
    console.log(props.name)
    return (
        <span>
            <svg>
                <use xlinkHref={`#${props.name}`}/>
            </svg>
        </span>
    )
}
export default Icon