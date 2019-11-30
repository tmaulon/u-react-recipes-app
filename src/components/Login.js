import React from 'react'

const Login = ({ facebookAuthenticate, googleAuthenticate }) => {

    return (
        <div className="login">
            <h2>Me connecter pour créer mes recettes</h2>
            <div>
                <button onClick={facebookAuthenticate} className="facebook-button">
                    Me connecter avec Facebook
                </button>
                <button onClick={googleAuthenticate} className="google-button">
                    Me connecter avec Google
                </button>
            </div>
        </div>

    )
}

export default Login