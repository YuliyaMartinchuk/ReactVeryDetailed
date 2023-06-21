import type {Meta, StoryObj} from '@storybook/react';
import React, {useEffect, useState} from "react";

const SimpleExample = () => {
    const [fake,setFake] = useState(1)
    const [counter,setCounter] = useState(1)
    console.log("SimpleExample")
   useEffect(()=> {
       console.log('useEffect every render')
       document.title = counter.toString()

   })
    useEffect(()=> {
        console.log('useEffect only first render(componentDidMount)')
        document.title = counter.toString()

    },[])
    useEffect(()=> {
        console.log('useEffect first render and every counter change')
        document.title = counter.toString()

    },[counter])

    return <>
        Hello, {counter} {fake}
        <button onClick={()=>setFake(fake+1)}>fake +</button>
        <button onClick={()=>setCounter(counter+1)}>counter +</button>
    </>
}

const meta: Meta<typeof SimpleExample> = {
    title: 'useEffect demo',
    component: SimpleExample,
};


export default meta;
type Story = StoryObj<typeof SimpleExample>;

export const SimpleExample1: Story = {

};

