import React, { Component } from "react";
import Button from "./components/button.jsx";
export default class App extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            min: +localStorage.getItem("min"),
            max: +localStorage.getItem("max"),
            step: +localStorage.getItem("step"),
        };
        
    }
    incrementCount = () => {
        this.setState(({count, step})=>({
            count: count + step 
        })); 
    };

    decrementCount = () => {
        this.setState(({count, step})=>({
            count: count - step 
        })); 
    };

    resetCount = () => {
        this.setState({
            count: this.state.min
        });
    };
    maxNumber = (event) => {
        localStorage.setItem("max", event.target.value);
        this.setState({ max: event.target.value });
    };

    minNumber = (event) => {
        localStorage.setItem("min", event.target.value);
        this.setState({ min: event.target.value });
    };

    step = (event) => {
        localStorage.setItem("step", event.target.value);
        this.setState({ step: event.target.value });
    };

    render() {
        let { count } = this.state;
        return ( 
        
            <div className = "app" > 
            <div className = "wrapper" >
            <div class = "count" >
            <h3 className = "header" >    Count : </h3>  
            <h1 className = "header" > { count } </h1>  
            </div> 
            <div class = "buttons" >
            <Button title = { "-" } onClick = { this.decrementCount }/>  
            <Button title = { "+" } onClick= { this.incrementCount }/> 
            <Button title = { "Reset " } onClick= { this.resetCount }/> 
            </div>
            <div className="input">
            <input placeholder="Select max number"
            onChange = { this.maxNumber }
            value = { this.state.max }
            type="Number"
            />
            <input placeholder="Select min number"
            onChange = { this.minNumber }
            value = { this.state.min }
            type="Number"
            /> 
            <input placeholder="Select step"
            onChange = {this.step}
            type="Number"
            /> 
            </div>
            </div> 
            </div>
        );
    };
};