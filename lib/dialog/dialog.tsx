import React, {ReactElement,ReactNode} from 'react'
import './dialog.scss'
import {Icon} from "../index";
import {scopedClassMaker} from "../classes";
import ReactDOM from 'react-dom';

interface Props {
    visible: boolean,
    buttons?: Array<ReactElement>
    onClose: React.MouseEventHandler
    clickMaskClose?: boolean
}


const scopedClass = scopedClassMaker('czUi-dialog')

const Dialog: React.FunctionComponent<Props> = (props) => {
    const handleClose: React.MouseEventHandler = (e) => {
        props.onClose(e)
    }
    const handleMask: React.MouseEventHandler = (e) => {
        if (props.clickMaskClose) {
            handleClose(e)
        }
    }
    const buttons = props.buttons && props.buttons.length > 0 && props.buttons.map((button, index) => {
        return React.cloneElement(button, {key: index})
    })
    const dialog = props.visible ?
        <>
            <div className={scopedClass('mask')} onClick={handleMask}/>
            <div className={scopedClass()}>
                <div className={scopedClass('close')} onClick={handleClose}>
                    <Icon name={'close'}/>
                </div>
                <header className={scopedClass('header')}>hint</header>
                <main className={scopedClass('main')}>{props.children}</main>
                {buttons &&
                    <footer className={scopedClass('footer')}>
                        <div>
                            {buttons}
                        </div>
                </footer>}
            </div>
        </>
        :
        null
    return (
        ReactDOM.createPortal(dialog, document.body)
    )
}
const alert = (content: string) => {
    const component = <Dialog visible={true} onClose={() => {
        ReactDOM.render(React.cloneElement(component, {visible: false}), div)
        ReactDOM.unmountComponentAtNode(div) // 卸载组件
        div.remove()
    }}>
        <div>{content}</div>
    </Dialog>
    const div = document.createElement('div')
    document.body.appendChild(div)
    ReactDOM.render(component, div)
}
const confirm = (content: string, yes?: () => void, no?: () => void) => {
    const onYes = () => {
        ReactDOM.render(React.cloneElement(component, {visible: false}), div)
        ReactDOM.unmountComponentAtNode(div) // 卸载组件
        div.remove()
        yes && yes()
    }
    const onNo = () => {
        ReactDOM.render(React.cloneElement(component, {visible: false}), div)
        ReactDOM.unmountComponentAtNode(div) // 卸载组件
        div.remove()
        no && no()
    }
    const component = <Dialog visible={true} buttons={[
        <button onClick={onYes}>yes</button>,
        <button onClick={onNo}>no</button>,]} onClose={onNo}>
        <div>{content}</div>
    </Dialog>
    const div = document.createElement('div')
    document.body.appendChild(div)
    ReactDOM.render(component, div)
}
const modal = (content: ReactNode) => {
    const onClose = () => {
        ReactDOM.render(React.cloneElement(component, {visible: false}), div)
        ReactDOM.unmountComponentAtNode(div) // 卸载组件
        div.remove()
    }
    const component = <Dialog visible={true}  onClose={onClose}>
        <div>{content}</div>
    </Dialog>
    const div = document.createElement('div')
    document.body.appendChild(div)
    ReactDOM.render(component, div)
    return onClose
}
export {alert, confirm, modal}
export default Dialog