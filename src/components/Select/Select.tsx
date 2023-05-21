import React, {ChangeEvent, useState, KeyboardEvent, useEffect} from 'react';
import s from "./Select.module.css"


export type SelectItemsType = {
    value: string
    title: string
}

type PropsType = {
    selectValue: string | undefined | null
    onChange:( selectValue: string ) => void
    items:SelectItemsType[]

}

const Select = (props:PropsType) => {

    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.selectValue)


    const onChangeSelect = (e:ChangeEvent<HTMLSelectElement>) => {
        props.onChange(e.currentTarget.value)
    }

    const selectItem  = props.items.find(i=> i.value === props.selectValue)
    const hoveredItem  = props.items.find(i=> i.value === hoveredElementValue)

    useEffect(()=>{
        setHoveredElementValue(props.selectValue) //Зафиксировал один раз, если selectValue изменилось снаружи
    },[props.selectValue]) //но дальше, когда будем водить мышкой, перерисовка кмопоненты будет просиходить,
        //так как зависимость не изменилась  ничего не будет просиходить

    const toggleItems=()=> {setActive(!active)}

    const onItemClick = (value:string) => {
        props.onChange(value);
        toggleItems()
    }

    //листать кнопками
    const onKeyDown =(e:KeyboardEvent<HTMLDivElement>)=> {
        if (e.key === "ArrowDown" || e.key === "ArrowUp" ) { // если были нажаты вверх вниз
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue ) {
                    const pretendentElement = e.key === "ArrowDown"
                        ? props.items[i+1]
                        : props.items[i-1]
                    if (pretendentElement) { //если есть следующий элемент в списке, т.е. мы не дошли до конца
                        props.onChange(pretendentElement.value) //говорим, что выбрали элемент
                       return
                    }
                }
            }
            //чтобы  не крутился по кругу
            if (!selectItem) { //если прошли цикл и не вышли
                props.onChange(props.items[0].value) //если мы не нашли ничего, тогда претендентом должен являться первый элемент
            }

        }
        if (e.key === "Enter" || e.key === "Escape") { //Производим выбор элемента и прячем список
            setActive(false)

        }
    }

    return (
        <>
            {/*<div style={{margin: "10px"}}>*/}
            {/*    <select value={props.selectValue} onChange={onChangeSelect}>*/}
            {/*        {props.items.map(el=><option key={el.value}>{el.title}</option>)}*/}
            {/*    </select>*/}
            {/*</div>*/}

            <div className={s.select} onKeyDown={onKeyDown} tabIndex={0}>
                <span className={s.main} onClick={toggleItems} >{selectItem && selectItem.title}</span>
                {
                    active &&
                    <div className={s.items}>
                        {props.items.map(el=><div
                            onMouseEnter={()=>{setHoveredElementValue(el.value)}} //Подсвечивается элемент при наведении курсора
                            className={s.item + " " + (hoveredItem === el ? s.selected : " ") } // Меняет цвет фона при выборе
                            key={el.value}
                            onClick={()=>{onItemClick(el.value)}}
                        >{el.title}
                        </div>)}
                    </div>
                }
            </div>
        </>

    );
};

export default Select;