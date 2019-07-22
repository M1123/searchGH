import React from "react";
import Card from "./card";


class rl extends React.Component{
    render(){ 
        
        return(
            <div>
                <h2>Найдено репозиториев: {this.props.total_count}</h2>
                <div>
                    {this.props.items.map((card, key) =>
                    <Card card={card} key={this.props.id}  />)} 
                </div>         
                
            </div>
        );
    }
}

export default rl;