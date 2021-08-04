import React from 'react'

class Clock extends React.Component {

    constructor(props){
        super(props)
        this.state= {
            date: new Date()
        }
    }


    componentDidMount(){
        this.timeId = setInterval(
            () => this.tick(), 1000
        )
    }

    componentWillUnmount(){
        clearInterval(this.timeId)
    }

    tick(){
        this.setState({
            date: new Date()
        })
    }


    render() {
        return (
            <div>
                <h1> Soat {this.state.date.toLocaleDateString()} bo'ldi</h1>
            </div>
        )
    }
}

export default Clock
