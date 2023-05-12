import React, {useRef, useState} from 'react';

export const UncontrolledInputByButtonPress = () => {
    const [value,setValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () =>{
        const el= inputRef.current as  HTMLInputElement
        setValue(el.value)
    }
    return (
        <>
            <input ref={inputRef}  />
            <button onClick={save} >save</button>
        </>
    );
};

