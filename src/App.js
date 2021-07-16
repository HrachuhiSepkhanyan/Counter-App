import React, { Component } from "react";
import Button from "./components/button.jsx";
export default class App extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        };
    }
    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        });
        if(this.state.count ===0){

        }
    };

    decrementCount = () => {
        this.setState({
            count: this.state.count - 1
        });
        if(this.state.count===0){
          return
        }
    };

    resetCount = () => {
        this.setState({
            count: this.state.count = 0
        }); 
    };
    addCount = () => {
      this.setState({

      })
    }  
      render() {
        let { count } = this.state;
        return (
            <div className = "app" >
            <div className = "wrapper" >
            <div class = "count" > 
            <h3 className = "header" > Count:
             </h3> <h1 className = "header" > { count } </h1> 
             </div> 
             <div class = "buttons" >
            <Button title = { "-"  } action = { this.decrementCount }/> 
            <Button title = { "+" }  action = { this.incrementCount }/> 
            <Button title = {  "Reset "} action = { this.resetCount }/>
             </div> 
                 < label htmlFor = "new" > Select min number </label> 
                 <input 
                    id = "max number"
                    onChange = { this.handleChange }
                    value = { this.state.text }
                    />

                    <Button title = { "V" }
                    action = { this.addCount }
                    /> 
                    <label htmlFor = "new" > Select max number </label> 
                    <input
                    id = "max number"
                    onChange = { this.handleChange }
                    value = { this.state.number }
                    /> 
                    <Button title = { "V" } action = { this.decrementCount }/>
                    <label htmlFor = "new" >
                        Select step </label> 
                        <input
                    id = "min number"
                    onChange = { this.handleChange }
                    value = { this.state.text }
                    /> 
                    <Button title = { "V" }
                    action = { this.decrementCount }
                    /> 
                 </div>
                </div>
            );
        };
    };