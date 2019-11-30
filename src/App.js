import React, { Component } from 'react'
// CSS
import './App.css'

import Header from './components/Header'
import Admin from './components/Admin'
import Card from './components/Card'
import recipes from './recipes'

// firebase
import base from './base'

class App extends Component {
  state = {
    pseudo: this.props.match.params.pseudo,
    recipes: {}
  }

  componentDidMount() {
    this.refs = base.syncState(`/${this.state.pseudo}/recipes`, {
      context: this,
      state: 'recipes'
    })
  }

  componentWillUnmount() {
    base.removeBinding(this.ref)
  }

  addRecipe = recipe => {
    const recipes = { ...this.state.recipes }
    recipes[`recipe-${Date.now()}`] = recipe
    this.setState({ recipes })
  }

  updateRecipe = (newRecipe, key) => {
    const recipes = { ...this.state.recipes }
    recipes[key] = newRecipe
    this.setState({ recipes })
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
          recipes={this.state.recipes}
          loadExemple={this.loadExemple}
          addRecipe={this.addRecipe}
          updateRecipe={this.updateRecipe}
        />
      </div>
    )
  }
}

export default App
