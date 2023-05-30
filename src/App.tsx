import React, { useState} from 'react';
import './App.css';
import {Accordion, ItemsPropsType} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import Input from "./components/Input/Input";
import Checkbox from "./components/Checkbox/Checkbox";
import Select, {SelectItemsType} from "./components/Select/Select";
import {Example1} from "./components/ReactMemo/ReactMemo";
import {DifficultCountingExample} from "./components/UseMemo/DifficultCountingExample";
import {HelpsForReactMemo} from "./components/UseMemo/HelpsForReactMemo";
import {LikeUseCallback} from "./components/UseMemo/LikeUseCallback";



function App() {


    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [switchOn, setSwitchOn] = useState<boolean>(false)
    const [inputValue, setInputValue]=useState("")
    const [checkboxValue, setCheckboxValue]=useState(true)
    const [selectValue, setSelectValue]=useState<string|undefined>("2")


    const items: ItemsPropsType[] = [
        {value:1, title: "Valera"},
        {value:2, title: "Ann"},
        {value:3, title: "Tim"},
        {value:4, title: "Maks"},
    ]

    const selectItems:SelectItemsType[] = [
        {value:"0",title:""},
        {value:"1", title: "Minsk"},
        {value:"2", title: "Moscow"},
        {value:"3", title: "Kiev"},
    ]



    console.log("App rendering")
    return (
        <div className={"App"}>
            <Accordion titleValue={"Menu"}
                       collapsed={accordionCollapsed}
                       onChange={()=>setAccordionCollapsed(!accordionCollapsed)}
                       items={items}
                       onClick={(value)=>alert(`user with ${value} should be happy`)}
            />
            <Accordion titleValue={"Users"}
                       collapsed={accordionCollapsed}
                       onChange={()=>setAccordionCollapsed(!accordionCollapsed)}
                       items={items}
                       onClick={(value)=>alert(`user with ${value} should be happy`)}
            />
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <OnOff  on={switchOn} onChange={setSwitchOn}/>
            <Input  inputValue={inputValue} onChange={setInputValue}/>
            <Checkbox onChange={setCheckboxValue} checked={checkboxValue}/>
            <Select onChange={setSelectValue}
                    selectValue={selectValue}
                    items={selectItems} />
            <Select onChange={setSelectValue}
                    selectValue={null}
                    items={selectItems} />

            <Example1/>
            <DifficultCountingExample />
            <HelpsForReactMemo />
            <LikeUseCallback />

            {/*{Uncontrolled components}*/}

            {/* <PageTitle title={"This is App component"}/>
            <PageTitle title={"My friends"}/>
            Article 1
            <Rating value={3}/>*/}
            {/*<MyOnOff />*/}
            {/*<UncontrolledOnOff  onChange={setSwitchOn}/> {switchOn.toString()}*/}
            {/*<UncontrolledAccordion titleValue={"Menu"}/>*/}
            {/*<UncontrolledAccordion titleValue={"Users"}/>*/}
            {/*<UncontrolledRating />*/}
            {/*<UncontrolledInput />*/}
            {/*<UncontrolledInputByButtonPress />*/}


        </div>
    );
}
//
// type PageTitlePropsType = { title: string }
// function PageTitle(props: PageTitlePropsType) {
//
//     console.log("PageTitle rendered")
//     return <h1>{props.title}</h1>
// }

export default App;
