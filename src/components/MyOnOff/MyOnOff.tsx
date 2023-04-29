import s from "./MyOnOff.module.css"
import React, {useState} from "react";

// export type OnOffPropsType = {
//     on: boolean
// }

export function MyOnOff() {
    let [on,setOn]=useState(true)
    return (
        <div className={s.container}>
            <div className={`${s.switch} ${on && s.switchOn}` } onClick={()=>{setOn(true)}}>On</div>
            <div className={`${s.switch} ${!on && s.switchOff}` } onClick={()=>{setOn(false)}}>Off</div>
            <div className={`${s.circle} ${on && s.circleOn} || ${!on && s.circleOff}`  }></div>
                <div></div>
                </div>
                )
            }



// <div className={s.container}>
//     <div className={`${s.switch} ${props.on && s.switchOn}` } onClick={()=>{}}>On</div>
//     <div className={`${s.switch} ${!props.on && s.switchOff}` }>Off</div>
//     <div className={`${s.circle} ${props.on && s.circleOn} || ${!props.on && s.circleOff}`  }></div>