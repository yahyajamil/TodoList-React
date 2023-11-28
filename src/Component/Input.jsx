import React, { useEffect, useState, useRef } from 'react';

let todoId = 0;

function Input({ store }) {
    const [, forceUpdate] = useState(0);
    const inputRef = useRef(null);

    useEffect(() => {
        const unSubscribe = store.subscribe(() => forceUpdate(c => c + 1));
        return () => unSubscribe();
    }, [store]);

    const inputHandler = (e) => {
        if (inputRef.current.value !== "") {
            if (e.key === 'Enter') {
                const { value } = inputRef.current;
                store.dispatch({
                    type: 'ADD_TODO',
                    id: todoId++,
                    title: value
                });
                inputRef.current.value = '';
            }
        }
    };

    const clickHandler = () => {
        const { value } = inputRef.current;
        if (inputRef.current.value !== "") {
            store.dispatch({
                type: 'ADD_TODO',
                id: todoId++,
                title: value
            });
        }
        inputRef.current.value = '';
    };

    return (
        <div className="input-content w-full flex justify-center items-center">
            <input
                ref={inputRef}
                type="text"
                placeholder="New Todo"
                onKeyDown={inputHandler}
                className="w-3/4 border border-blue-500 rounded rounded-r-none px-1 py-2 outline-none lg:w-2/3 focus:shadow-2xl focus:shadow-blue-200 transition-all"
            />
            <button
                className="bg-blue-500 hover:bg-blue-600 text-white text-3xl rounded rounded-l-none w-10 flex justify-center items-center pb-1.5 transition-all"
                onClick={clickHandler}
            >
                +
            </button>
        </div>
    );
}

export default Input;
