import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {OnOff2} from "./components/OnOff(ver2)/OnOff2";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";




function App() {
    console.log("App rendering")
    return (
        <div>
            {/* <PageTitle title={"This is App component"}/>
            <PageTitle title={"My friends"}/>
            Article 1
            <Rating value={3}/>*/}
            <Accordion titleValue={"Menu"} collapsed={true}/>
            <Accordion titleValue={"Users"} collapsed={false}/>
         <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <OnOff />

            <OnOff2 />
            <OnOff2 />

            <UncontrolledAccordion titleValue={"Menu"} />
            <UncontrolledAccordion titleValue={"Users"} />

            <UncontrolledRating />





        </div>
    );
}
type PageTitlePropsType ={
    title:string
}
function PageTitle(props: PageTitlePropsType) {

    console.log("PageTitle rendered")
    return <h1>{props.title}</h1>
}


export default App;
