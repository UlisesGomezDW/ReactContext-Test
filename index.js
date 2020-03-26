import React, { Component } from 'react';
import { render } from 'react-dom';
import One from './components/one';
import {Actions} from "./actions"
import './style.css';
export const dataContext = React.createContext();
const App = () => {
  const people = { name: "User", age: 48}
  return(
    <div className="card">
    <dataContext.Provider value={new Actions}>
      <h1>Principal component</h1>
      <One/>
    </dataContext.Provider>  
    </div>
  )
}
render(<App />, document.getElementById('root'));
