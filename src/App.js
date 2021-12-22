// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const App = () =>{
  const [curNum,updNum] = useState(0); // hook declaration needs to be inside function
  const incNum = () =>{
    updNum(curNum+1); //issue with ++ and -- ?
  };
  const decNum = () =>{
    if(curNum>0){
      updNum(curNum-1);
    }
    else
      alert('The least value of count can be 0.')
  };
  return(
    // React Fragment
    <> 
      <div className='main'>
        <div className='centerDiv'>
          <h1>{curNum}</h1>
          <div className='btn'>
            <button onClick={incNum}>Increase</button>
            <button onClick={decNum}>Decrease</button>
          </div>
        </div>
      </div>
    </>
  )
}
export default App;
// to use state variable with functions we use hooks, in class we can use state and props directly