import React from 'react';
import axios from 'axios';
import './App.css';
import List from './components/List'
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
    }

    componentDidMount() {
      this.getGit();
    }
  

    render() {
      return (
        <div>

          <Card {...this.state.gitUser} />
          <List followers={this.state.followers} />
        </div>
      )
    }
  }
  
  export default App;