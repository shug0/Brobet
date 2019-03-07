
const firebase = require('firebase/app')
require('firebase/auth')
require('firebase/firestore')

import { MASTER_WALLET_ID } from '../../constants/keys/config'
const { NO_WALLETS } = require('../../constants/keys/errors')
const { ROUTE_API_WALLET_INIT } = require('../../constants/api/routes')

const { getLoggedUser } = require('./auth')

module.exports = {
  getCurrentUserWallet: () => new Promise((resolve, reject) => {
    const db = firebase.firestore()
    db
      .collection('wallets')
      .doc(getLoggedUser().uid)
      .get()
      .then(res => res.exists ? resolve(res.data().value) : reject(NO_WALLETS))
      .catch(reject)
  }),

  initCurrentUserWallet: (tokenId) => {
    const payload = {
      'tokenId': tokenId,
      'to': getLoggedUser().uid,
      'from': MASTER_WALLET_ID
    }

    return fetch(ROUTE_API_WALLET_INIT, {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      credentials: 'same-origin',
      body: JSON.stringify(payload)
    }
    )
  }
}
