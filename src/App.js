import React from 'react';
import Context from './Context';
import Counter from './component/Counter';
import CounterTitle from './component/CounterTitle';
class App extends React.Component{
    state = {
        title: 'Welcome to counter application!',
        counter:0,
    }
    render(){
        return(
            <>
                <Context.Provider value={
                    {counter: this.state.counter, title: this.state.title}}>
                        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                            <CounterTitle/>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', margin: '30px'}}>
                            <button onClick={
                                ()=>this.setState({
                                    counter: this.state.counter + 1,
                                })
                            }>Increment</button>
                            <Counter/>
                            <button onClick={
                                ()=>this.setState({
                                    counter: this.state.counter-1,
                                })
                            }>Decrement</button>
                            </div>
                        </div>
                    )
                    </Context.Provider>
            </>
        );
    }
}
export default App;