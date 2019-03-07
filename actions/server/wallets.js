const { NO_WALLETS, NO_FUNDS } = require('../../constants/keys/errors')
const { REASON_INITIAL_DEPOSIT } = require('../../constants/keys/tokens')

module.exports = (firebase, store) => {
  const getWalletFund = (db, ref, reason) => new Promise((resolve, reject) => (
    db.get(ref)
      .then(wallet => {
        if (reason === REASON_INITIAL_DEPOSIT && !wallet.exists) resolve(0)
        if (!wallet.exists) reject({ error: NO_WALLETS })

        resolve(wallet.data().value)
      })
      .catch(reject)
  ))

  const doTransaction = (transaction) => store.runTransaction(db => {
    const { from, to, amount, reason } = transaction

    const fromWalletRef = store.collection('wallets').doc(from)
    const toWalletRef = store.collection('wallets').doc(to)

    async function getAndUpdateFunds (db) {
      const fromWalletValue = await getWalletFund(db, fromWalletRef, reason)
      const toWalletValue = await getWalletFund(db, toWalletRef, reason)

      if (fromWalletValue < amount) return Promise.reject({ error: NO_FUNDS })

      await db.update(fromWalletRef, { value: fromWalletValue - amount })
      await db.set(toWalletRef, { value: toWalletValue + amount })
    }
    return getAndUpdateFunds(db)
  })

  return {
    doTransaction
  }
}
