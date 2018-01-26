import React from "react";

import "./general.css";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    render() {
        return (
            <div>
                <h1>Welcome</h1>
                <p>{this.state.count}</p>
                <button onClick={() => this.setState({count: this.state.count + 1})}>+1</button>
                <button onClick={() => this.setState({count: this.state.count - 1})}>-1</button>
                <button onClick={() => this.setState({count: 0})}>Reset</button>
                <p>The site is currently contentless.</p>
            </div>
        )
    }
}


export default Home;