import React, {useReducer, useState} from "react";
import {reducer} from "../../reducers/reducer";

type AccordionPropsType = {
    titleValue: string
    // collapsed: boolean
}

 export function UncontrolledAccordion(props: AccordionPropsType) {
    console.log("Accordion rendering")

    let [collapsed, dispatch] = useReducer(reducer, {collapsed:false})

    return (<div>
        <AccordionTitle title={props.titleValue} onClick={() => {dispatch({type:"TOGGLE-COLLAPSED"})}} />
        {/*<AccordionTitle title={props.titleValue} onClick={() => {setCollapsed(!collapsed)}} />*/}
       {/* <button onClick={() => {setCollapsed(!collapsed)}}>TOGGLE</button>*/}
       {!collapsed && <AccordionBody/>}
    </div>)
}

type AccordionTitlePropsType = {
    title: string
    onClick: ()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return ( <>
            <h3 onClick={()=> props.onClick()}>---{props.title}--- </h3>
    </>

    )
}

function AccordionBody() {
    console.log("AccordionBody rendering")
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}


