import '../index.css';
import './Index.css'
import useCounter from "../hooks/reducerCounter";


function ReducerCounter() {
    const { count, decrement, increment, reset } = useCounter()

    return (
        <div className="App">
            <h3>Dzifa's Counter App</h3>
            <a href="/custom">View custom hook version here</a> <br/>
            <br></br>
            <a href="/reducer">View reducer hook version here</a> <br/>
            <br></br>
            <a href="/iam404">View error page here</a>
        </div>
    );
}

export default ReducerCounter;
