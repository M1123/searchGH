import React from "react";
import Card from "./card";


class rl extends React.Component{
    render(){ 
        
        return(
            <div>
                <h2>Найдено репозиториев: {this.props.total_count}</h2>
                <div className="wrapper">
                    {this.props.items.map((card, key) =>
                    <Card card={card} key={key}  />)} 
                </div>         
                
            </div>
        );
    }
}

export default rl;