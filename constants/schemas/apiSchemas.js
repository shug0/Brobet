const yup = require('yup')
const { REASONS } = require('../keys/tokens')

module.exports = {
  TOKENS_TRANSACTION_SCHEMA: yup.object().shape({
    tokenId: yup.string().required(),
    amount: yup.number().required(),
    to: yup.string().required(),
    from: yup.string().required(),
    reason: yup.mixed().oneOf(REASONS).required()
  })
}
