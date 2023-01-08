import '../index.css'
import './Error.css';
import useCounter from "../hooks/reducerCounter";


function Error() {
    const { count, decrement, increment, reset } = useCounter()

    return (
        <div className="App">
            <h3>Dzifa's Counter App</h3>
            <p>So sorry, but this page does not exist. Go back <a href="/">home</a></p>
        </div>
    );
}

export default Error;
