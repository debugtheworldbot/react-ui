import React from 'react'

interface IconProps{
    name:string
}

const Icon:React.FunctionComponent<IconProps>=(props)=>{
    console.log(props.children)
    return(
        <span>
            {props.name}
            icon
        </span>
    )
}
export default Icon