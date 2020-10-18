import React from 'react'
import './dialog.scss'
import {Icon} from "../index";
import {scopedClassMaker} from "../classes";
interface Props {
    visible: boolean,
}


const scopedClass = scopedClassMaker('czUi-dialog')

const Dialog: React.FunctionComponent<Props> = (props) => {
    return (
        props.visible ?
            <>
                <div className={scopedClass('mask')}>a</div>
                <div className={scopedClass()}>
                    <div className={scopedClass('close')}>
                        <Icon  name={'close'}/>
                    </div>
                    <header className={scopedClass('header')}>hint</header>
                    <main className={scopedClass('main')}>{props.children}</main>
                    <footer className={scopedClass('footer')}>
                        <button>ok</button>
                        <button>cancel</button>
                    </footer>
                    </div>
            </>
            :
            null
    )
}
export default Dialog