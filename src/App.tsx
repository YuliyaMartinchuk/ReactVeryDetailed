import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledInput} from "./components/UncontrolledInput/UncontrolledInput";
import {
    UncontrolledInputByButtonPress
} from "./components/UncontrolledInputByButtonPress/UncontrolledInputByButtonPress";
import Input from "./components/Input/Input";
import Checkbox from "./components/Checkbox/Checkbox";
import Select from "./components/Select/Select";


function App() {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [switchOn, setSwitchOn] = useState<boolean>(false)
    const [inputValue, setInputValue]=useState("")
    const [checkboxValue, setCheckboxValue]=useState(true)
    const [selectValue, setSelectValue]=useState<string|undefined>("2")

    const onChangeInput = (e:ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
    }
    const onChangeCheckbox = (e:ChangeEvent<HTMLInputElement>) => {
        setCheckboxValue(e.currentTarget.checked)
    }

    const onChangeSelect = (e:ChangeEvent<HTMLSelectElement>) => {
        setSelectValue(e.currentTarget.value)
    }


    console.log("App rendering")
    return (
        <div>
            {/* <PageTitle title={"This is App component"}/>
            <PageTitle title={"My friends"}/>
            Article 1
            <Rating value={3}/>*/}
            <Accordion titleValue={"Menu"} collapsed={accordionCollapsed} onChange={()=>setAccordionCollapsed(!accordionCollapsed)}/>
            <Accordion titleValue={"Users"} collapsed={accordionCollapsed} onChange={()=>setAccordionCollapsed(!accordionCollapsed)}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            {/*<MyOnOff />*/}
            <OnOff  on={switchOn} onChange={setSwitchOn}/>
            <UncontrolledOnOff  onChange={setSwitchOn}/> {switchOn.toString()}
            <UncontrolledAccordion titleValue={"Menu"}/>
            <UncontrolledAccordion titleValue={"Users"}/>
            <UncontrolledRating />
            <UncontrolledInput />
            <UncontrolledInputByButtonPress />
            <Input onChange={onChangeInput}
                   inputValue={inputValue}
            />
            <Checkbox onChange={onChangeCheckbox}
                      checked={checkboxValue}
            />
            <Select onChange={onChangeSelect}
                    selectValue={selectValue}
            />

        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {

    console.log("PageTitle rendered")
    return <h1>{props.title}</h1>
}


export default App;
