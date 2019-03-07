module.exports = (firebase, firestore) => ({
  verifyAuthToken: (token) => (
    firebase.auth().verifyIdToken(token)
  )
})
