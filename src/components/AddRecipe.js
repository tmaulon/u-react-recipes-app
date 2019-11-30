import React, { Component } from 'react'

class AddRecipe extends Component {
    state = {
        nom: '',
        image: '',
        ingredients: '',
        instructions: ''
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="card">
                <div className="admin-form ajouter-recette">
                    <input value={this.state.nom} onChange={this.handleChange} name='nom' type="text" placeholder="Nom de la recette" />
                    <input value={this.state.image} onChange={this.handleChange} name='image' type="text" placeholder="nom de l'image" />
                    <textarea value={this.state.ingredients} onChange={this.handleChange} name="ingredients" rows="3" placeholder="Liste des ingrédients"></textarea>
                    <textarea value={this.state.instructions} onChange={this.handleChange} name="instructions" rows="15" placeholder="Liste des instructions"></textarea>

                </div>

            </div>
        )
    }
}

export default AddRecipe