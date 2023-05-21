import React from "react";

export type ItemsPropsType = {
    value: any
    title: string
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: ItemsPropsType[]
    onClick:(value: any)=>void
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

type AccordionBodyPropsType = {
    items: ItemsPropsType[]
    onClick:(value: any)=>void
}


export function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")

    return (<div style={{margin: "10px"}}>
        <AccordionTitle title={props.titleValue}
                        onChange={props.onChange}
        />
        {!props.collapsed && <AccordionBody
            items={props.items}
            onClick={props.onClick}
        />}
    </div>)
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <h3 onClick={(e) => props.onChange()}>---{props.title}---</h3>
    )
}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log("AccordionBody rendering")
    return <ul style={{display: "inline-block"}}>
        {props.items.map((el, value) => <li
                onClick={()=> {props.onClick(el.value)}}
            key={el.value}>{el.title}

        </li>
        )}
    </ul>
}


