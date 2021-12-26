// import logo from './logo.svg';
//using redux

import './App.css';
import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import {
    decrement,
    increment,
    reset,
    logIn,
    logOut,
} from "./Redux/actions/index";

function App() {
    const counter = useSelector((state)=>state.counterReducer);
    const auth = useSelector((state)=>state.authReducer);
    const dispatch = useDispatch();
    
    return(
        <div className="App">
            <h1>
                A little Redux Project.
            </h1>
            <h3>Counter</h3>
            <h3>{counter}</h3>
            <button onClick={() => dispatch(increment())}>Increase</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
            <button onClick={() => dispatch(decrement())}>Decrease</button>

            <h2>For Logged in users only</h2>
            <button onClick={() => dispatch(logIn())}>Login</button>
            <button onClick={() => dispatch(logOut())}>Logout</button>
            {auth ? (
                <div>
                <p>
                    This is implemented using Redux.
                </p>
                </div>
            ) : (
                ""
            )}
        </div>
    );
}

export default App;
// to use state variable with functions we use hooks, in class we can use state and props directly