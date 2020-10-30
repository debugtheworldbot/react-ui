import React from "react";
import Switch from "./switch";

export default function () {
    const handleChange = (checked: boolean) => {
        console.log(`switch to ${checked}`)
    }
    const handleDisabled = (checked: boolean) => {
        console.log(`it's ${checked} and disabled`)
    }
    return (
        <>
            <h2>default</h2>
            <Switch onChange={handleChange} checked/>
            <Switch checked style={{marginLeft: '20px',background:'red'}}/>

            <h2>三种大小</h2>
            <Switch checked small style={{marginRight: '20px'}}/>
            <Switch checked style={{marginRight: '20px'}}/>
            <Switch checked big/>

            <h2>disabled</h2>
            <Switch disabled onClick={handleDisabled} style={{marginRight: '20px'}}/>
            <Switch disabled onClick={handleDisabled} checked/>
        </>)
}