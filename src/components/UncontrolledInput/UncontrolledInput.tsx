import React, {ChangeEvent, useRef, useState} from 'react';

export const UncontrolledInput = () => {
    const [value,setValue] = useState("")
    const onChange= (e:ChangeEvent<HTMLInputElement>)=> {
        const actualValue = e.currentTarget.value
        setValue(actualValue)
    }

    return (
        <div>
            <input onChange={onChange}/>
        </div>
    );
};



