import React from "react";
import { connect } from 'react-redux';

function Status(props) {
    return (
        <div className="status">
            <button onClick={() => { props.dispatch({ type: 'TOGGLE_TODO', id: props.completed.id }) }}>
                <i className={`${props.completed.completed ? 'fa fa-clock-o bg-yellow-400 hover:bg-yellow-500' : 'fa fa-check bg-green-600'} text-white p-2 rounded mx-2 hover:bg-green-700`}></i>
            </button>
            <button onClick={() => { props.dispatch({ type: 'REMOVE_TODO', id: props.completed.id }) }}>
                <i className="fa fa-remove bg-red-600 text-white p-2 rounded hover:bg-red-700"></i>
            </button>
        </div>
    )
}

export default connect()(Status);
