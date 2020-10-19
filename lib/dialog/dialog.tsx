import React, {ReactElement} from 'react'
import './dialog.scss'
import {Icon} from "../index";
import {scopedClassMaker} from "../classes";

interface Props {
    visible: boolean,
    buttons?: Array<ReactElement>
    onClose: React.MouseEventHandler
}


const scopedClass = scopedClassMaker('czUi-dialog')

const Dialog: React.FunctionComponent<Props> = (props) => {
    const handleClose: React.MouseEventHandler = (e) => {
        props.onClose(e)
    }
    const buttons=props.buttons&&props.buttons.length>0&& props.buttons.map((button, index) => {
        return  React.cloneElement(button, {key: index})})


    return (
        props.visible ?
            <>
                <div className={scopedClass('mask')}>a</div>
                <div className={scopedClass()}>
                    <div className={scopedClass('close')} onClick={handleClose}>
                        <Icon name={'close'}/>
                    </div>
                    <header className={scopedClass('header')}>hint</header>
                    <main className={scopedClass('main')}>{props.children}</main>
                    <footer className={scopedClass('footer')}>
                        {buttons? buttons:
                            <div>
                                <button>ok</button>
                                <button>cancel</button>
                            </div>}

                    </footer>
                </div>
            </>
            :
            null
    )
}
export default Dialog