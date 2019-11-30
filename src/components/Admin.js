import React, { Component } from 'react'

import AddRecipe from './AddRecipe'
import AdminForm from './AdminForm'
class Admin extends Component {
    render() {
        const { recipes, addRecipe, updateRecipe, loadExemple } = this.props

        return (
            <div className="cards">
                <AddRecipe addRecipe={addRecipe} />
                {
                    Object.keys(recipes)
                        .map(key => (
                            <AdminForm
                                key={key}
                                id={key}
                                updateRecipe={updateRecipe}
                                recipes={recipes}
                            ></AdminForm>
                        ))
                }
                <footer>
                    <button
                        onClick={loadExemple}
                    >
                        Remplir
                </button>
                </footer>
            </div>
        )
    }
}

export default Admin