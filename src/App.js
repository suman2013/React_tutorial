import React from "react"
import logo from "./logo.svg"
import "./App.css"

class App extends React.Component{
  render(){
    return(
      <div>
        <img src={logo} height="100" width="100" className="logo" />
        <h1>My React Todo App</h1>
        <div className="container">
          Add an Item..
          <br />
          <input type="text" name="" />
          <button className="add-btn">Add Todo</button>
          <div className="list">
            <ul>
              <li>
                <input type="checkbox" name="" id="" />
                Record Youtube Videos
                <button className="btn"> Delete </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
