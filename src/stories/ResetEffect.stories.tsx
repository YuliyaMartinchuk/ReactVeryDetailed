import type {Meta, StoryObj} from '@storybook/react';
import React, {useEffect, useState} from "react";



const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1)
    console.log("component rendered with" + counter)
    useEffect(() => {
            console.log("Effect occurred:" + counter)
        return () => {
            console.log("RESET EFFECT" + counter)
        }
    }, [counter])

    const increase = () =>{setCounter(counter + 1)}
    return <>
        Hello, {counter} <button onClick={increase}>+</button>
    </>
}

const meta: Meta<typeof ResetEffectExample> = {
    title: 'Reset Effect demo',
    component: ResetEffectExample,
};


export default meta;
type Story = StoryObj<typeof ResetEffectExample>;

export const ResetEffect: Story = {

};