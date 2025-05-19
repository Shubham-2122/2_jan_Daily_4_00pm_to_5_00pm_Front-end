// state :- it's a varible useing modify
// state :- same file data change 
// state in class :- constr super
// state this as well on object :- define
// setstate fix
// this.setstate  :- method

// class method fix in state , this.state ,  this.setstate :- change kar

import React, { Component } from 'react'
import Imagec from './Imagec';

class ClassState extends Component {

    constructor() {
        super();
        this.state = {
            name: "Harsh",
            count: 0,
            isimage: true,
            course: {
                front: "front-end",
                back: "Back-end"
            }
        }
    }

    getcchange = () => {
        this.setState({
            name: "Akash"
        })
    }



    render() {

        // console.log(this.state)
        return (
            <>
                <h1>hello name : {this.state.name}</h1>

                <button onClick={() => this.setState({ name: "Ansh" })}>Change name</button>
                <button onClick={() => this.setState({ name: "Het patel" })}>CHange name 2</button>
                <button onClick={this.getcchange}>Chnage name 3</button>

                <h1>Hello this course :- {this.state.course.front}</h1>
                <h1>Hello count :- {this.state.count}</h1>
                {/* sum = sum + data */}
                <button className='btn btn-primary' onClick={() => this.setState({ count: this.state.count + 1 })}>Incrment</button>
                <button className='btn btn-danger' onClick={() => this.setState({ count: this.state.count - 1 })}>Decrement</button>
                <button className='btn btn-info' onClick={() => this.setState({ count: 0 })}>Zero</button>
                {/* <button className='btn btn-info' onClick={() => this.setState({ count: this.state.count * 0 })}>Zero</button> */}

                <br /> <br />

                <button className='btn btn-success' onClick={() => this.setState({ isimage: false })}>Hide</button>
                <button className='btn btn-info' onClick={() => this.setState({ isimage: true })}>Show</button>
                <button className='btn btn-primary' onClick={() => this.setState({ isimage: !this.state.isimage })}>Toggle</button>

                {
                    (this.state.isimage) ? <Imagec /> : false
                }

            </>
        )
    }
}

export default ClassState
