import React, {useState} from 'react'
import Dialog, {alert, confirm, modal} from "./dialog";

const DialogExample: React.FunctionComponent = () => {
    const [x, setX] = useState(false)
    const openModal=()=>{
        const onClose= modal(<h1>hi<button onClick={()=>onClose()}>11</button></h1>)
    }
    return (
        <div>
            <Dialog visible={x} buttons={[
                <button>1</button>,
                <button>2</button>,
                <button>3</button>
            ]} onClose={()=>setX(false)} clickMaskClose={true}>
                <div>hi</div>
            </Dialog>
            <button onClick={()=>setX(!x)}>toggle</button>
            <button onClick={()=>alert('alert')}>alert</button>
            <button onClick={()=>confirm('alert',()=>{
                console.log('success')},()=>{
                console.log('failed')})}>confirm</button>
            <button onClick={openModal}>modal</button>
        </div>

    )
}
export default DialogExample