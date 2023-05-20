import React, {ChangeEvent} from 'react';

type PropsType = {
    selectValue: string|undefined
    onChange:( selectValue: string|undefined) => void

}

const Select = (props:PropsType) => {
    const onChangeSelect = (e:ChangeEvent<HTMLSelectElement>) => {
        props.onChange(e.currentTarget.value)
    }

    return (
        <div>
            <select value={props.selectValue} onChange={onChangeSelect}>
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