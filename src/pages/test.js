import { Button } from "@mui/material";
import { useReducer } from "react";

const initialState = {firstCounter: 0};
const reducer = (state, action) => {
    switch(action.type){
        case 'increment':
            return {firstCounter: state.firstCounter + action.value};
        case 'decrement':
            return {firstCounter: state.firstCounter - action.value};
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

function Test() {
    const [count, dispatch] = useReducer(reducer, initialState);

    return <div>
        <h1>Count = {count.firstCounter}</h1>
        <Button onClick={() => dispatch({type: 'increment', value: 1})}>Increment</Button>
        <Button onClick={() => dispatch({type: 'decrement', value: 1})}>Decrement</Button>
        <Button onClick={() => dispatch({type: 'reset'})}>Reset</Button>
    </div>;
}

export default Test;