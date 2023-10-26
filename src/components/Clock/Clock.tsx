import React, {useEffect, useState} from 'react';
import {get2digitsString} from "./dateUtils";

type Props = {}

export const Clock: React.FC<Props> = () => {
    const [date, setDate] = useState(new Date())
    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date())
        })
        return () => {
            clearInterval((intervalID))
        }
    }, [])

    return (
        <div>
            <span>{get2digitsString(date.getHours())}</span>
            :
            <span>{get2digitsString(date.getMinutes())}</span>
            :
            <span>{get2digitsString(date.getSeconds())}</span>
        </div>
    )
}

