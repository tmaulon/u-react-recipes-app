import React from 'react'
import PropTypes from 'prop-types';

// CSS
import './App.css'

// Components
import Header from './components/Header'
import Admin from './components/Admin'
import Card from './components/Card'

// HOC
import withFirebase from './hoc/withFirebase'

// Context
import ThemeContext from './components/Theme'

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
    <ThemeContext>
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
    </ThemeContext>
  )
}

App.propTypes = {
  match: PropTypes.object.isRequired,
  recipes: PropTypes.object.isRequired,
  loadExemple: PropTypes.func.isRequired,
  addRecipe: PropTypes.func.isRequired,
  updateRecipe: PropTypes.func.isRequired,
  removeRecipe: PropTypes.func.isRequired,
}

const WrappedComponent = withFirebase(App)

export default WrappedComponent
