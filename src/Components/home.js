import React, { Component } from 'react'



class Home extends Component {
    state = {
        counter: 1
    }
    Add = () => {


        let total = parseInt(this.state.number1) + parseInt(this.state.number2)
        this.setState({ total: total })
    }
    multiply = () => {

        let total = parseInt(this.state.number1) * parseInt(this.state.number2)
        this.setState({ total: total })
    }
    divide = () => {


        let total = parseInt(this.state.number1) / parseInt(this.state.number2)
        this.setState({ total: total })
    }
    subtract = () => {


        let total = parseInt(this.state.number1) - parseInt(this.state.number2)
        this.setState({ total: total })
    }
    render() {

        return (
            <div className='home_container '>
                <p>
                    input number 1
                </p>
                <input onChange={(e) => { this.setState({ number1: e.target.value }) }} />
                <p>
                    input number 2
                </p>
                <input onChange={(e) => { this.setState({ number2: e.target.value }) }} />

                <button onClick={this.Add}>
                    add
                </button>

                <button onClick={this.subtract}>
                    subtract
                </button>
                <button onClick={this.multiply}>
                    multiply
                </button>
                <button onClick={this.divide}>
                    divide
                </button>

                <p>result={this.state.total}</p>
            </div>
        )
    }
}

export default Home