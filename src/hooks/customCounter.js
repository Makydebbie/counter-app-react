import {useState} from "react";



function useCounter(){
    const [count, setCount] = useState( 0);

    const increment = () => setCount(count + 1)
    const decrement = () => {
        if (count !== 0) setCount(count - 1)
    }
    const reset = () => 0

    return {
        count,
        increment,
        decrement,
        reset
    }
}

export default useCounter
