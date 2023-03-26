import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";


ReactDOM.render(
    <App />,
    document.getElementById('root')
);


let users = [
    {
        name: "Lo",
        age:7,
        address: {
            city: "Minsk",
            country: "Belarus"
        }
    },
    {
        name: "LoLo",
        age:7,
        address: {
            city: "Minsk",
            country: "Belarus"
        }
    }
]

//console.log(users[0].address.country);
