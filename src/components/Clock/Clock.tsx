import React, {useEffect, useState} from 'react';
import {get2digitsString} from "./dateUtils";
import {DigitalClockView} from "./DigitalClockView/DigitalClockView";
import {AnalogClockView} from "./AnalogClock/AnalogClockView";


type Props = {
    mode: "analog" | "digital"
}

export type ClockViewPropsType = {
    date: Date
}

export const Clock: React.FC<Props> = ({mode}) => {
    const [date, setDate] = useState(new Date())
    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date())
        })
        return () => {
            clearInterval((intervalID))
        }
    }, [])

    let view

    switch (mode) {
        case "analog":
            view = <AnalogClockView date={date}/>
            break

        case "digital":
        default:
            view = < DigitalClockView date={date}/>
    }

    return (
        <div>
            {view}
        </div>
    )
}


