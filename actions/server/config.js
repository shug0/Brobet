const { NOT_ADMIN } = require('../../constants/keys/errors')

module.exports = (firebase, firestore) => {
  const getAdmins = () => {
    return firestore
      .collection('config')
      .doc('admins')
      .get()
  }

  const isUserAdmin = (uid) => new Promise((resolve, reject) => (
    getAdmins(uid)
      .then(adminsRef => {
        const admins = adminsRef.data().value
        if (admins.includes(uid)) {
          resolve()
        }
        reject({ error: NOT_ADMIN })
      })
      .catch(reject)
  ))

  return {
    getAdmins,
    isUserAdmin
  }
}
