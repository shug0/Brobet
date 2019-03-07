const { ROUTE_API_TOKENS_TRANSACTION } = require('../../constants/api/routes')

module.exports = {
  // The transaction firestore is only accessible to ADMIN SDK
  // So we are asking the server to do the transaction for us
  requestTransaction: (payload) => {
    return fetch(ROUTE_API_TOKENS_TRANSACTION, {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      credentials: 'same-origin',
      body: JSON.stringify(payload)
    }
    )
  }
}
