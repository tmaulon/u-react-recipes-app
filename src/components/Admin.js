import React, { Component } from 'react'

import AddRecipe from './AddRecipe'
import AdminForm from './AdminForm'
import Login from './Login'

// firebase
import firebase from 'firebase/app'
import 'firebase/auth'
import base, { firebaseApp } from '../base'

class Admin extends Component {
    state = {
        uid: null,
        chef: null
    }

    handleAuth = async authData => {
        const box = await base.fetch(this.props.pseudo, { context: this })

        if (!box.chef) {
            await base.post(`${this.props.pseudo}/chef`, {
                data: authData.user.uid
            })
        }

        this.setState({
            uid: authData.user.uid,
            chef: box.chef || authData.user.uid
        })

    }

    facebookAuthenticate = () => {
        const authProvider = new firebase.auth.FacebookAuthProvider()
        firebaseApp
            .auth()
            .signInWithPopup(authProvider)
            .then(this.handleAuth)
    }

    googleAuthenticate = () => {
        const authProvider = new firebase.auth.GoogleAuthProvider()
        firebaseApp
            .auth()
            .signInWithPopup(authProvider)
            .then(this.handleAuth)
    }

    logOut = async () => {
        console.log('Déconnexion');
        await firebase.auth().signOut()
        this.setState({ uid: null })

    }


    render() {
        const { recipes, addRecipe, updateRecipe, removeRecipe, loadExemple } = this.props

        const LogOut = <button onClick={this.logOut}>Déconnexion</button>

        // if user not connected 
        if (!this.state.uid) {
            return <Login facebookAuthenticate={this.facebookAuthenticate} googleAuthenticate={this.googleAuthenticate} />
        }

        if (this.state.uid !== this.state.chef) {
            return (
                <div>
                    <p>
                        Ce n'est pas ta boîte à recettes !
                </p>
                    {LogOut}
                </div>
            )
        }

        return (
            <div className="cards">
                <AddRecipe addRecipe={addRecipe} />
                {
                    Object.keys(recipes)
                        .map(key =>
                            <AdminForm
                                key={key}
                                id={key}
                                updateRecipe={updateRecipe}
                                removeRecipe={removeRecipe}
                                recipes={recipes}
                            />
                        )
                }
                <footer>

                    {LogOut}

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