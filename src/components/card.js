import React from "react";
import './style.css'
class card extends React.Component{
    render(){
        return(
            <div className="card">
                <p>name: {this.props.card.name}</p>
                <p>id: {this.props.card.id}</p>
            </div>
        );
    }
}

export default card;