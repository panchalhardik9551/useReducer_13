import React, { useReducer } from 'react'


const initialstate = 0;

const reducer = (state, action) => {
    console.log(state, action);
    if (action.type === "increment") {
        return state + 1;
    }
    if (action.type === "decrement") {
        return state - 1;
    }
    return state;
}


export default function UseReducer() {

    const [state, dispatch] = useReducer(reducer, initialstate);

    return (
        <>
            <div className='main'>
                <p>{state}</p>
                <div >
                    <button className='btn' onClick={() => dispatch({ type: "increment" })} >Increment</button>
                    <button className='btn' onClick={() => dispatch({ type: "decrement" })} >Decrement</button>
                </div>
            </div>
        </>
    );
}
