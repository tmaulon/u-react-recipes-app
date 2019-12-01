import React, { Component } from 'react'

import recipes from '../recipes'

// firebase
import base from '../base'

const withFirebase = WrappedComponent => (
    class HOC extends Component {
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
            return (

                <WrappedComponent
                    recipes={this.state.recipes}
                    loadExemple={this.loadExemple}
                    addRecipe={this.addRecipe}
                    updateRecipe={this.updateRecipe}
                    removeRecipe={this.removeRecipe}
                    {...this.props} />
            )
        }
    }
)

export default withFirebase