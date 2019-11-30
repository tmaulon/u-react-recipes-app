import React from 'react'

const AdminForm = ({
    id: key,
    updateRecipe,
    recipes,
}) => {
    const recipe = recipes[key]

    const handleChange = (event, key) => {
        const { name, value } = event.target
        const recipe = recipes[key]
        recipe[name] = value
        updateRecipe(key, recipe)
    }

    return (
        <div className="card">
            <form className="admin-form">

                <input value={recipe.nom} onChange={e => handleChange(e, key)} type="text" name="nom" placeholder="Nom de la recette" />

                <input value={recipe.image} onChange={e => handleChange(e, key)} type="text" name="image" placeholder="Adresse de l'image" />

                <textarea value={recipe.ingredients} onChange={e => handleChange(e, key)} name="ingredients" rows="3" placeholder="Liste des ingrédients" />

                <textarea value={recipe.instructions} onChange={e => handleChange(e, key)} name="instructions" rows="15" placeholder="Liste des instructions" />

            </form>
            <button>Supprimer</button>
        </div>
    )
}

export default AdminForm