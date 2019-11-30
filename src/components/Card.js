import React from 'react'

const Card = ({ details }) => {

    const ingredients = details.ingredients
        .split(',')
        .map(item => <li key={item}>{item}</li>)

    const instructions = details.instructions
        .split('\n')
        .map(item => <li key={item}>{item}</li>)

    const requireImage = chemin => {
        try {
            return require(`../img/${chemin}`)
        } catch (error) {
            return require('../img/default.jpeg')
        }
    }

    return (
        <div className="card">
            <div className="image">
                <img src={requireImage(details.image)} alt={details.nom} />
            </div>
            <div className="recipe">
                <h2>
                    {details.nom}
                </h2>
                <ul className="liste-ingredients">
                    {ingredients}
                </ul>
                <ol>
                    {instructions}
                </ol>
            </div>
        </div>
    )
}

export default Card