import React, {useState} from 'react'
import Dialog from "./dialog";

const DialogExample: React.FunctionComponent = () => {
    const [x, setX] = useState(false)

    return (
        <div>
            <Dialog visible={x}>
                <div>hi</div>
            </Dialog>
            <button onClick={()=>setX(!x)}>toggle</button>
        </div>

    )
}
export default DialogExample