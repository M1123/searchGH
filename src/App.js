
import React from 'react';
import logo from './logo.svg';
import Resl from './components/resultlist';
import Si from './components/searchinput';
import './App.css';


class App extends React.Component{

  state = {
    name: undefined,
    items: undefined,
    htmlurl: undefined,
    stargazers_count: undefined,
    watchers_count: undefined,
    error: undefined
  }

  searchingGH = async (e) => {
    const stext = e.target.value;
    const apiurl = await fetch(`https://api.github.com/search/repositories?q=${stext}`);
    const data = await apiurl.json();
    console.log(data);
    console.log(stext);
    this.setState({
      // name: data.name,
      // htmlurl: data.htmlurl,
      // stargazers_count: data.stargazers_count,
      // watchers_count: data.watchers_count,
      error: "",
      items: data.items,
      total_count: data.total_count
    })
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
          // name={this.state.items[1].name}
          // htmlurl={this.state.items[1].htmlurl}
          // stargazers_count={this.state.items[1].stargazers_count}
          // watchers_count={this.state.items[1].watchers_count}
        />
      </div>
    );
  }
}


export default App;