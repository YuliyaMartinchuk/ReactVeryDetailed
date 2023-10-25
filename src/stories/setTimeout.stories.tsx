import type {Meta, StoryObj} from '@storybook/react';
import React, {useEffect, useState} from "react";


const SetIntervalExample = () => {
    const [counter, setCounter] = useState(1)

    console.log("setIntervalExample")

    useEffect(() => {
        setInterval(() => {
            console.log("tick:" + counter)
            setCounter((state) => state + 1)
        }, 1000)
    }, [])

    return <>
        Hello, {counter}
    </>
}
const meta: Meta<typeof SetIntervalExample> = {
    title: 'setIntervalExample',
    component: SetIntervalExample,
};


export default meta;
type Story = StoryObj<typeof SetIntervalExample>;

export const SimpleExample1: Story = {};

