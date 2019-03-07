const firebase = require('firebase/app')
require('firebase/auth')
require('firebase/firestore')

module.exports = {
  getCurrentUserIdToken: () => (
    firebase.auth().currentUser.getIdToken(true)
  ),

  getLoggedUser: () => firebase.auth().currentUser,

  signOut: () => firebase.auth().signOut(),

  login: (values) => (
    firebase.auth().signInWithEmailAndPassword(
      values.email,
      values.password
    )
  ),

  createUserAuth: (values) => (
    firebase.auth().createUserWithEmailAndPassword(
      values.email,
      values.password
    )
  ),

  updateUserAuth: (values) => {
    const currentUser = firebase.auth().currentUser
    return currentUser.updateProfile({ displayName: values.pseudo })
  },

  createUserInStore: (authUser, formValues) => {
    const db = firebase.firestore()
    return db.collection('users')
      .doc(authUser.uid)
      .set({
        uid: authUser.uid,
        email: authUser.email,
        pseudo: formValues.pseudo
      })
  }
}
