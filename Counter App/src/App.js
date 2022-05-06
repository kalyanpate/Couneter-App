import "./styles.css";
import React ,{useReducer} from 'react';

export default function App() {
  const reducerFun= (state, action) =>{
    if(action === "inc"){
      return state+1;
    }
    if(action ==="dec"){
      return state-1;
    }
  }
  const [myNumber, dispatchFun]=useReducer(reducerFun,0);
  return (
    <div className="App">
      <h1>Numbers : {myNumber}</h1>
      <button onClick={()=> dispatchFun("inc")}> + </button>
      
      <button onClick={()=> dispatchFun("dec")}> - </button>
    </div>
  );
}
