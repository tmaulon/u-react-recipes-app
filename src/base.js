import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBPeEG0EjWx24jSa4uxXBPJiY7kYsL6M30",
  authDomain: "react-recipes-app-51588.firebaseapp.com",
  databaseURL: "https://react-recipes-app-51588.firebaseio.com",
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
