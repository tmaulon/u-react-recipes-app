import React, { Component } from 'react'
// CSS
import './App.css'

import Header from './components/Header'
import Admin from './components/Admin'
import recipes from './recipes'

class App extends Component {
  state = {
    pseudo: this.props.match.params.pseudo,
    recipes: {}
  }

  loadExemple = () => {
    this.setState({ recipes })
  }

  render() {
    return (
      <div className='box'>
        <Header pseudo={this.state.pseudo} />
        <div className='cards'>
          <div className='card'>
            <h2>Une Carte</h2>
          </div>
        </div>
        <Admin
          loadExemple={this.loadExemple}
        />
      </div>
    )
  }
}

export default App
