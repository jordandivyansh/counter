import React, { useContext } from 'react';
import {AppState} from '../Context';

export default function Counter(){
    const mycontext = useContext(AppState);
    return <p>Counter: {mycontext.counter}</p>
}