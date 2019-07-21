import React from "react";
class Si extends React.Component{
    render(){
        return(
            <input type="text" name="sghinput" placeholder="Поиск" onChange={this.props.startSearch}/>
        );
    }
}

export default Si;