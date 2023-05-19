import React, {ChangeEvent} from 'react';
type PropsType = {
    onChange:(e:ChangeEvent<HTMLInputElement>) => void
    checked: boolean

}

const Checkbox = (props:PropsType) => {


    return (
        <div>
            <input type={"checkbox"} checked={props.checked} onChange={props.onChange}/>
        </div>
    );
};

export default Checkbox;