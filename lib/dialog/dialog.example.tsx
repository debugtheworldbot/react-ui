import React, {useState} from 'react'
import Dialog,{alert,confirm} from "./dialog";

const DialogExample: React.FunctionComponent = () => {
    const [x, setX] = useState(false)
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
                console.log('failed')})}>alert</button>
        </div>

    )
}
export default DialogExample