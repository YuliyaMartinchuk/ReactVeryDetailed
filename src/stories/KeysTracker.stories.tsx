import type {Meta, StoryObj} from '@storybook/react';
import React, {useEffect, useState} from "react";


const KeysTrackerExample = () => {
    const [text, setText] = useState(" ")

    console.log("component rendered with" + text)

    useEffect(() => {
        const handler = (e: KeyboardEvent)=>{
            console.log(e.key)
            setText(text + e.key)
        }
        window.addEventListener("keypress", handler)
        return () => {
            window.removeEventListener("keypress",handler)
        }
    }, [text])

    return <>
        Typed text: {text}
    </>
}

const meta: Meta<typeof KeysTrackerExample> = {
    title: 'Keys Tracker',
    component: KeysTrackerExample,
};


export default meta;
type Story = StoryObj<typeof KeysTrackerExample>;

export const KeysTracker: Story = {};