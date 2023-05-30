import React, {useCallback, useMemo, useState} from 'react';

type BookSecretPropsType = {
    // books:Array<string>
    addBook: ()=> void
}


export const LikeUseCallback = () => {
    console.log("LikeUseCallback")
    const [counter, setCounter] = useState(0)
    const [books, setBooks]=useState(["React", "JS", "CSS"])


    const memoizedAddBook = useMemo(()=>{
      return ()=> {
          console.log(books)
          setBooks([...books,"Angular"+ new Date().getTime()])
      }
    }, [books]);

    const memoizedAddBook2 = useCallback(
         ()=> {
            console.log(books)
            setBooks([...books,"Angular"+ new Date().getTime()])
        }
    , [books]);

    return (
        <>
            <button  onClick={()=>{setCounter(counter+1)}}>+</button>
            {counter}
            <Book  addBook={memoizedAddBook2}  />
        </>
    );
};

const BooksSecret=(props:BookSecretPropsType)=> {
    console.log("BooksSecret")
    return <div>
        <button  onClick={()=>{props.addBook()}}>add book</button>
    </div>
}

const Book = React.memo(BooksSecret)
