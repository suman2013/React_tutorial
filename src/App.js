import React from "react"
import logo from "./logo.svg"
import "./App.css"

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      newItem:"",
      list : [],
      doneList : [],
    }
  }
  addItems(todoValue){
    if(todoValue != ""){
      const newItem = {
        id: Date.now(),
        value: todoValue,
        isDone: false
      };
      const list = [...this.state.list];
      list.push(newItem);
      this.setState({
        list,
        newItem:""
      });
    }
  }

  addItemsToDone(id){
    if(id !== ""){
      const list = [...this.state.list];
      const doneList = [...this.state.doneList];

      list.map(item => {
        if(item.id == id){
          item.isDone = true;
          doneList.push(item);
        }
      })

      const newlist = list.filter(item => item.id != id);
      console.log(newlist);
      this.setState({
        list: newlist,
        doneList
      })
    }
  }

  addTotodo(id){
    if(id != ""){
      const list = [...this.state.list];
      const doneList = [...this.state.doneList];

      doneList.map(item => {
        if(item.id == id){
          item.isDone = false;
          list.push(item);
        }
      });

      const newDoneList = doneList.filter(item => item.id !== id);

      this.setState({
        list,
        doneList : newDoneList
      })
    }
  }

  deleteItem(id){
    const list = [...this.state.list];
    const updatedList = list.filter(item => item.id !== id);

    this.setState({
      list:updatedList
    })
  }

  updateInput(input){
    this.setState({newItem:input});
  }

  render(){
    return(
      <div>
        <img src={logo} height="100" width="100" className="logo" />
        <h4 className="app-title">My React Todo App</h4>
        <div className="container">
          Add an Item..
          <br />
          <input
            type="text"
            name=""
            className="input-text"
            required
            value={this.state.newItem}
            onChange={e => this.updateInput(e.target.value)}
          />
          <button className="add-btn" onClick={() => this.addItems(this.state.newItem)} disabled={!this.state.newItem.length}>Add Todo</button>

          <div class="flex-container">
            <div class="flex-child magenta">
            <div className="list">
            Todo List
              <ul>
                  {
                  this.state.list.map(item => {
                  return (
                    <li key={item.id}>
                      <input type="checkbox" id="idDone" checked={item.isDone} onClick={() => this.addItemsToDone(item.id)}/>
                      {item.value}
                      <button className="btn" onClick={() => this.deleteItem(item.id)}>Delete</button>
                    </li>
                  )
                })}
              </ul>
            </div>
            </div>
            <div class="flex-child green">
            <div className="list">
            Done List
            <ul>
              {
                this.state.doneList.map(item => {
                  return (
                    <li key={item.id}>
                      <input type="checkbox" id="idDone" checked={item.isDone} onClick={() => this.addTotodo(item.id)}/>
                      {item.value}
                    </li>
                  )
                })
              }
            </ul>
            </div>
            </div>
          </div>








          </div>
        </div>

    )
  }
}

export default App;
