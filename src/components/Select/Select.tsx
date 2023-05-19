import React, {ChangeEvent} from 'react';

type PropsType = {
    onChange:(e:ChangeEvent<HTMLSelectElement>) => void
    selectValue: string|undefined

}

const Select = (props:PropsType) => {


    return (
        <div>
            <select value={props.selectValue} onChange={props.onChange}>
                <option >none</option>
                <option value={"1"}>Minsk</option>
                <option value={"2"}>Moscow</option>
                <option value={"3"}>Kiev</option>
                <option></option>
            </select>
        </div>
    );
};

export default Select;