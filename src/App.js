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
    base.removeBinding(this.refs)
  }

  addRecipe = recipe => {
    const recipes = { ...this.state.recipes }
    recipes[`recipe-${Date.now()}`] = recipe
    this.setState({ recipes })
  }

  updateRecipe = (key, newRecipe) => {
    const recipes = { ...this.state.recipes }
    recipes[key] = newRecipe
    this.setState({ recipes })
  }

  removeRecipe = key => {
    const recipes = { ...this.state.recipes }
    recipes[key] = null
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
          pseudo={this.state.pseudo}
          recipes={this.state.recipes}
          loadExemple={this.loadExemple}
          addRecipe={this.addRecipe}
          updateRecipe={this.updateRecipe}
          removeRecipe={this.removeRecipe}
        />
      </div>
    )
  }
}

export default App
