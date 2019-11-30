import React, { Component } from 'react'
// CSS
import './App.css'

import Header from './components/Header'
import Admin from './components/Admin'
import Card from './components/Card'
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
    const cards = Object.keys(this.state.recipes)
      .map(key => <Card key={key} details={this.state.recipes[key]}></Card>)


    return (
      <div className='box'>
        <Header pseudo={this.state.pseudo} />
        <div className='cards'>
          {cards}
        </div>
        <Admin
          loadExemple={this.loadExemple}
        />
      </div>
    )
  }
}

export default App
