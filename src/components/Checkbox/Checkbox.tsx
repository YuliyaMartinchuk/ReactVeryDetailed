import React, {ChangeEvent} from 'react';
type PropsType = {
    checked: boolean
    onChange:(checked: boolean) => void

}

const Checkbox = (props:PropsType) => {

    const onChangeCheckbox = (e:ChangeEvent<HTMLInputElement>) => {
        props.onChange(e.currentTarget.checked)
    }
    return (
        <div style={{margin: "10px"}}>
            <input type={"checkbox"} checked={props.checked} onChange={onChangeCheckbox}/>
        </div>
    );
};

export default Checkbox;