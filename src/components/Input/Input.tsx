import React, {ChangeEvent} from 'react';
type PropsType ={
    inputValue: string
    onChange: (inputValue: string)=>void

}

const Input = (props:PropsType) => {
    const onChangeInput = (e:ChangeEvent<HTMLInputElement>) => {
        props.onChange(e.currentTarget.value)
    }

    return (
        <div>
            <input value={props.inputValue} onChange={onChangeInput}/>
        </div>
    );
};

export default Input;