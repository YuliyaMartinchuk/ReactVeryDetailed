import s from "./OnOff.module.css"
import React from "react";

export type OnOffPropsType = {
    on: boolean

}


export function OnOff(props: OnOffPropsType) {
    return (
        <div className={s.container}>
            <div className={`${s.switch} ${props.on && s.switchOn}` }>On</div>
            <div className={`${s.switch} ${!props.on && s.switchOff}` }>Off</div>
            <div className={`${s.circle} ${props.on && s.circleOn} || ${!props.on && s.circleOff}`  }></div>
                <div></div>
                </div>
                )
            }