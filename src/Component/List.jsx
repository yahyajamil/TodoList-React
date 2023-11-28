import React from "react";
import Todo from "./Todo";

function List(props) {
   
    return (
        <ul className="list mt-4 [&>*:nth-child(even)]:bg-blue-200 [&>*:nth-child(odd)]:bg-gray-200">
            <Todo todo = {props.todo} store = {props.store}/>
        </ul>
    )
}

export default List;