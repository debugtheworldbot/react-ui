import Demo from "../../demo";
import IconExample from "./iconExample";
import React from 'react';


export default ()=>{
    return (
        <Demo code={require('!!raw-loader!./iconExample.tsx').default}>
            <IconExample />
        </Demo>
    )
}