import React from 'react';
import './App.css';
import CardList from './components/CardList'
import Card from './components/Card'



class App extends React.Component {
  constructor() {
    super()
    this.state = {
      username: 'dstadz',
      gitUser: {},
      followers: [] ,
      inputValue: ''
    }
  }

  getGit = () => {
    axios.get(`https://api.github.com/users/${this.state.username}`)
      .then((res) => {
        this.setState({
          gitUser: res.data
        })
      })
      .catch((err) => {
        console.log(err)
      })
  

  render() {
    return (
      <div className="App">
         <CardList cards={this.state.cards}/> 
      </div>
    );
  }
}

export default App;
