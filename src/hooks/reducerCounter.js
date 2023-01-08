import {useReducer} from "react";

function counterReducer(state, action){
    switch(action.type) {
        case 'inc':
            return state + 1
        case 'dec':
            if(state !== 0) {
                return state - 1
            }else {
                return state
            }
        case 'res':
            return 0
        default:
            return state
    }
}

function useCounter(){
    const [state, dispatch] = useReducer(counterReducer, 0);

    return {
        count: state,
        increment: () => dispatch({ type: 'inc' }),
        decrement: () => dispatch({ type: 'dec' }),
        reset: () => dispatch({ type: 'res' })
    }
}

export default useCounter
