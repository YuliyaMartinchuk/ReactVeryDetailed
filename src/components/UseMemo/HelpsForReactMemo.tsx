import React, {useMemo, useState} from 'react';


const UsersSecret=(props:{users:Array<string>})=> {
    return <div>
        {props.users.map((u,i)=><div key={i} >{u}</div>)
        }
    </div>
}

const Users = React.memo(UsersSecret)

export const HelpsForReactMemo = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers]=useState(["Dimy", "Valera", "Artem"])
    const newArray = useMemo(()=>{
       const  newArray= users.filter(u => u.toLowerCase().indexOf("a") > -1)
        return newArray
    },[users])

    const addUser=()=>{
        setUsers([...users,"Ann"+ new Date().getTime()])
    }


    return (
        <>
            <button  onClick={()=>{setCounter(counter+1)}}>+</button>
            <button  onClick={()=>{addUser()}}>add user</button>
            {counter}
            <Users users={newArray}/>
        </>
    );
};

