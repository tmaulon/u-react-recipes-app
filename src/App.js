import React from 'react'
// CSS
import './App.css'

import Header from './components/Header'
import Admin from './components/Admin'
import Card from './components/Card'

import withFirebase from './hoc/withFirebase'

const App = ({
  match,
  recipes,
  loadExemple,
  addRecipe,
  updateRecipe,
  removeRecipe,
}) => {
  const cards = Object.keys(recipes)
    .map(key => <Card key={key} details={recipes[key]} />)

  return (
    <div className='box'>
      <Header pseudo={match.params.pseudo} />
      <div className='cards'>
        {cards}
      </div>
      <Admin
        pseudo={match.params.pseudo}
        recipes={recipes}
        loadExemple={loadExemple}
        addRecipe={addRecipe}
        updateRecipe={updateRecipe}
        removeRecipe={removeRecipe}
      />
    </div>
  )
}

const WrappedComponent = withFirebase(App)

export default WrappedComponent
