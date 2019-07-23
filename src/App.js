import React, {Component} from 'react';
// import {connect} from 'react-redux';
import logo from './logo.svg';
import Resl from './components/resultlist';
import Si from './components/searchinput';
import './App.css';

class App extends Component{
  state = {items: []}

  searchingGH = async (e) => {
    const stext = e.target.value;
    const apiurl= await fetch(`https://api.github.com/search/repositories?q=${stext}`);
    let data;
    if (stext.length>1){
      data = await apiurl.json();
      var items=[];
      items = data.items;
      this.setState({
        items: items,
        total_count: data.total_count
      });
    } 
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Поиск по проектам на github</p>  
        </header>
        <Si startSearch={this.searchingGH} />
        <Resl 
          total_count={this.state.total_count} 
          items={this.state.items}
          id={this.state.items.id}
          name={this.state.items.name}
          htmlurl={this.state.items.htmlurl}
          stargazers_count={this.state.items.stargazers_count}
          watchers_count={this.state.items.watchers_count}
        />
      </div>
    );
  }
}


export default App;