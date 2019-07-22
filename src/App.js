
import React from 'react';
import logo from './logo.svg';
import Resl from './components/resultlist';
import Si from './components/searchinput';
import './App.css';

class App extends React.Component{

  state = {
    items: []  
  }

  searchingGH = async (e) => {
    const stext = e.target.value;
    const apiurl = await fetch(`https://api.github.com/search/repositories?q=${stext}`);
    const data = await apiurl.json();
    var items=[];
    items = data.items;
    console.log(items);

    this.setState({
      // name: data.name,
      // htmlurl: data.htmlurl,
      // stargazers_count: data.stargazers_count,
      // watchers_count: data.watchers_count,
      // error: "",
      items: items,
      total_count: data.total_count
    });
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