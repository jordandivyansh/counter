import React, {useContext} from 'react';
import {AppState} from '../Context';

export default function CounterTitle(){
    const mycontext = useContext(AppState);
    return <h1>{mycontext.title}</h1>;
}