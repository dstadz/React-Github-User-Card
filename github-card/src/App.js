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
      followers: [],
      inputValue: ''
    }
  }
  //Step 1, fetch data
  getGit = () => {
     axios.get(`https://api.github.com/users/${this.state.username}`)
      .then( res => {
        console.log(res.data)
        this.setState({ gitUser: res.data })
      })
      .catch( err => {
        console.log(err)
      })

       axios.get(`https://api.github.com/users/${this.state.username}/followers`)
      .then( res => {
        console.log(res.data)
        this.setState({ followers: res.data })
        console.log(this.state)
        console.log(this.state.followers)
      })
      .catch( err => {
        console.log(err)
      })
    }


    componentDidMount() {
      this.getGit();
    }

    componentDidUpdate(prevProps, prevState) {
      if(prevState.username !== this.state.username) {
        this.getUser();
      } else {
        return
      }
    }
    
    
    render() {
      console.log(this.state)
      this.getGit()
      console.log(this.state)
      return (
        <div>
          <Card {...this.state.gitUser} />
          <List followers={this.state.followers} /> 
        </div>
      )
    }
  }
  
  export default App;