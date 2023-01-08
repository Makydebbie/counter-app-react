import './ReducerCounter.css';
import useCounter from "../hooks/reducerCounter";


function ReducerCounter() {
    const { count, decrement, increment, reset } = useCounter()

    return (
        <div className="App">
            <h3>Dzifa's Counter App</h3>
            <h2 className="value">{count}</h2>

            <div>
                <button onClick={increment}>Increase</button>
                <button onClick={decrement}>Decrease</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    );
}

export default ReducerCounter;
