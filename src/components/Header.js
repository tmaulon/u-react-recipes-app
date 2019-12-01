import React from 'react'

import { ThemeContext } from './Theme'

const Header = ({ pseudo }) => {

    // test if the first letter is a voyel
    const formatPseudo = pseudo => /[aeiouy]/i.test(pseudo[0]) ? `d'${pseudo}` : `de ${pseudo}`

    return (
        <ThemeContext.Consumer>
            {context => (

                <header style={{ backgroundColor: context.state.theme }}>
                    <h1> La boîte à recette de {formatPseudo(pseudo)}</h1>
                </header>
            )}
        </ThemeContext.Consumer>
    )
}

export default Header