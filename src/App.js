import React, { useState } from 'react';
import {AppState} from './Context';
import Counter from './component/Counter';
import CounterTitle from './component/CounterTitle';
import {Increment} from './component/Increment';
import { Decrement } from './component/Decrement';
const App=()=>{
    
    const [counter,setCounter]=useState(0);
    const [title]=useState("Counter")

    const incrementHandler=()=>{
       setCounter(prevCounter=>prevCounter+1)
    }
    const decrementHandler=()=>{
        setCounter(prevCounter=>prevCounter-1)
    }

        return(
            <>
                <AppState.Provider value={
                    {counter: counter, title: title,incrementState:incrementHandler, decrementState:decrementHandler}}>
                        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                            <CounterTitle/>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', margin: '30px'}}>
                            <Increment/>
                            
                            <Counter/>
                            <Decrement />
                            </div>
                        </div>
                    )
                    </AppState.Provider>
            </>
        );
}
export default App;