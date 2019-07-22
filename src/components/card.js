
import React from "react";
import './style.css'
class card extends React.Component{
    render(){
        return(
            <div className="card">
                <h2><a href={this.props.card.html_url} target="blank">{this.props.card.name}</a></h2>
                <p className="counts">
                    <span>&#9733; {this.props.card.stargazers_count}</span>
                    <span>👤 {this.props.card.watchers_count}</span>
                </p>
            </div>
        );
    }
}

export default card;