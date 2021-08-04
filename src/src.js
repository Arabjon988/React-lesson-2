import React from 'react';

class src extends React.Component {
    constructor() {
        super();
        this.state = { capital: "Quddus" }
    }

    render() {
        return (
            <div>
                <h3>Men Falastin davlatiman. Poytaxtim {this.state.capital} shaxri! </h3>
            </div>
        );
    }
}

export default src;
