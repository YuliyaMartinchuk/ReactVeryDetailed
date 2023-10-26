import type {Meta, StoryObj} from '@storybook/react'
import React from "react"
import {Clock} from "./Clock"


const meta: Meta<typeof Clock> = {
    title: 'Clock',
    component: Clock,
}

export const BaseAnalogExample = () => {
    return <>
        <Clock mode={"analog"}/>
    </>
}
const BaseDigitalExample = () => {
    return <>
        <Clock mode={"digital"}/>
    </>
}


export default meta

type AnalogStory = StoryObj<typeof BaseAnalogExample>
export const AnalogClock: AnalogStory = {}


type DigitalStory = StoryObj<typeof BaseDigitalExample>
export const DigitalClock: DigitalStory = {}

