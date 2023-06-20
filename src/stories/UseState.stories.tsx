import type {Meta, StoryObj} from '@storybook/react';
import React, { useState} from "react";

const generateData = () => {
    console.log("generateData")
    return 1
}

const Example1 = () => {
    console.log("Example1")

   // const initValue = useMemo(generateData, [])
    const [counter,setCounter] = useState(generateData)

    return <>
        <button onClick={()=>setCounter(state=> state+1)}>+</button>
        {counter}
    </>
}


const meta: Meta<typeof Example1> = {
    title: 'useState demo',
    component: Example1,
};


export default meta;
type Story = StoryObj<typeof Example1>;

export const Example: Story = {

};

