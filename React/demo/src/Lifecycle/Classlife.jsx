// react lifecycle :- 
// 1) initial :- mouting phase :- compoennt did mount
// 2) updated :- update phase
// 3) unmouting :- data not read
// https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
// https://www.geeksforgeeks.org/reactjs-lifecycle-components/


import React, { Component } from 'react'
import Header from '../Layout/Coman/Header'

class Classlife extends Component {
    constructor(){
        super();
        this.state ={
            name : "Het patel"
        }
    }

    // mouting phase
    componentDidMount(){
        console.log("Hello this mouting Phase..")
    }

    // componentWillUpdate(){
    //     console.log("asdji")
    // }

    // state will modify udpdated
    componentDidUpdate(){
        console.log("Hello this updateing phase..")
    }

    componentWillUnmount(){
        console.log("Hello This unmouting phase....")
    }

  render() {
    return (
      <div>
        <Header />
        <h1>hello this lifeCycle</h1>
        <h1>Hello name :- {this.state.name}</h1>
        <button onClick={()=>this.setState({name : "Harsh patel"})}>Change name</button>
      </div>
    )
  }
}

export default Classlife
