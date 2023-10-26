import type {Meta, StoryObj} from '@storybook/react'
import React from "react"
import {Clock} from "./Clock"


const BaseExample = () => {
    return <>
       <Clock/>
    </>
}
const meta: Meta<typeof Clock> = {
    title: 'Clock',
    component: Clock,
};


export default meta;
type Story = StoryObj<typeof Clock>

export const SimpleExample1: Story = {}

