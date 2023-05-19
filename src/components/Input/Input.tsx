import React, {ChangeEvent} from 'react';
type PropsType ={
    onChange: (e:ChangeEvent<HTMLInputElement>)=>void
    inputValue: string
}

const Input = (props:PropsType) => {

    return (
        <div>
            <input value={props.inputValue} onChange={props.onChange}/>
        </div>
    );
};

export default Input;