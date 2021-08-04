import React from 'react'




class Laptop extends React.Component {

    constructor(props){
        super(props);
        this.state= {
            brand: "dell",
            model: "vostro",
            color:"black",
            size: 14
        };
    }


    changeLaptop = () => {
        this.setState({model: "inspiron", color: "silver", size: 15})
    }

    render() {
        return (
            <div>
                <h1>{this.state.brand}</h1> 
                <p> MOdel : {this.state.model}</p> <br />
                <p>Color : {this.state.color}</p> <br />
                <p>Size : {this.state.size}</p>


                <button onClick={this.changeLaptop}>Modelni o'zgartir</button>
            </div>
        )
    }
}

export default Laptop
