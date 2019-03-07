module.exports = (firebase, firestore) => ({
  addTransaction: (transaction) => (
    firestore
      .collection('transactions')
      .add(transaction)
  )
})
