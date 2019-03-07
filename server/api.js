const { DEFAUT_WALLET_AMOUNT } = require('../constants/keys/config')
const { REASON_INITIAL_DEPOSIT } = require('../constants/keys/tokens')
const { TOKENS_TRANSACTION_SCHEMA } = require('../constants/schemas/apiSchemas')
const {
  ROUTE_API_TOKENS_TRANSACTION,
  ROUTE_API_WALLET_INIT
} = require('../constants/api/routes')

const registerApi = (server, firebase) => {
  const firestore = firebase.firestore()
  firestore.settings({ timestampsInSnapshots: true })

  const { addTransaction } = require('../actions/server/transactions')(firebase, firestore)
  const { verifyAuthToken } = require('../actions/server/auth')(firebase, firestore)
  const { isUserAdmin } = require('../actions/server/config')(firebase, firestore)
  const { doTransaction } = require('../actions/server/wallets')(firebase, firestore)

  server.post(ROUTE_API_TOKENS_TRANSACTION, (req, res) => {
    const payload = req.body
    const { tokenId, ...transaction } = payload

    // Check the integrity of the payload
    TOKENS_TRANSACTION_SCHEMA.validate(payload)
      // Verify if the user auth tokenId is valid
      .then(() => verifyAuthToken(tokenId))
      // Verify if the user from the tokenId is admin
      .then((decodedToken) => isUserAdmin(decodedToken.uid))
      // Executing the transaction in the wallet
      .then(() => doTransaction(transaction))
      // Creating the transaction in the collection (History)
      .then(() => addTransaction(transaction))
      // Send the result or error to the client
      .then((data) => res.status(201).send({ transactionId: data.id }))
      .catch(err => res.status(400).send(err.message ? { error: err.message } : err))
  })

  server.post(ROUTE_API_WALLET_INIT, (req, res) => {
    const payload = req.body
    const { tokenId, ...transaction } = payload

    const initWalletTransaction = {
      ...transaction,
      'amount': DEFAUT_WALLET_AMOUNT,
      'reason': REASON_INITIAL_DEPOSIT
    }

    // Check the integrity of the payload
    TOKENS_TRANSACTION_SCHEMA.validate(initWalletTransaction)
    // Verify if the user auth tokenId is valid
      .then(() => verifyAuthToken(tokenId))
      // Executing the transaction in the wallet
      .then(() => doTransaction(initWalletTransaction))
      // Creating the transaction in the collection (History)
      .then(() => addTransaction(initWalletTransaction))
      // Send the result or error to the client
      .then((data) => res.status(201).send({ transactionId: data.id }))
      .catch(err => res.status(400).send(err.message ? { error: err.message } : err))
  })
}

module.exports = registerApi
