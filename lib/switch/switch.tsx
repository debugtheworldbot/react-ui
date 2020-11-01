import React, {useState} from "react";
import styled from "styled-components";

const SwitchWrapper = styled.button<{height:string}>`
  outline: none;
  height: ${props => props.height};
  width: calc( ${props => props.height} * 2);
  border: none;
  background: #bfbfbf;
  border-radius: calc( ${props => props.height} * 2);
  position: relative;
  > span {
      transition: all 0.2s;
    position: absolute;
    top: 2px;
    left: 2px;
    height:calc( ${props => props.height} - 4px);
    width: calc( ${props => props.height} - 4px);
    background: white;
    border-radius: calc( ${props => props.height} / 2);
  }
  &.checked{
    background:dodgerblue;
    > span{
      left: calc(100% - calc( ${props => props.height} - 4px) - 2px);
    }
  }
  &.disabled{
    opacity: 0.5;
    cursor: not-allowed;
  }
  &:active {
    background: #bfbfbf;
    > span {
      width: ${props => props.height};
    }
  }
  &.checked:active {
    background: dodgerblue;
    > span {
      width:${props => props.height};
      margin-left: -4px;
    }
  }
`
const Switch = (props: SwitchProps) => {
    const {checked, onChange, disabled, className, small, big, style, onClick} = props
    const h = small?'16px':big?'28px':'22px'
    const [active, setActive] = useState(checked || false)
    const handleClick = (e: React.MouseEvent) => {
        onClick && onClick(active, e)
        if (!disabled) {
            setActive(!active)
            onChange && onChange(active, e)
        }
    }
    const classes = (...name: (string | undefined)[]) => {
        return name.filter(Boolean).join(' ')
    }

    return (
        <SwitchWrapper className={classes(active ? 'checked' : undefined, disabled ? 'disabled' : undefined, className)}
                       onClick={handleClick} height={h} style={style}>
            <span/>
        </SwitchWrapper>
    )
}
export default Switch

interface SwitchProps {
    checked?: boolean, //指定当前是否选中
    onChange?: (checked: boolean, event?: React.MouseEvent) => void //变化时回调函数
    onClick?: (checked: boolean, event?: React.MouseEvent) => void //点击时回调函数
    style?: React.CSSProperties;
    disabled?: boolean,
    className?: string
    small?: boolean,
    big?: boolean,
}