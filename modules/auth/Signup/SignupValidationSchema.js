import * as Yup from 'yup'

const signupValidationSchema = Yup.object().shape({
  pseudo: Yup.string()
    .required('Choose a cool pseudo')
    .min(3, 'More than 3 char please')
    .max(20, '20 char is enough bro'),
  email: Yup.string()
    .required('Where I send spam without email ?')
    .email('A valid mail please'),
  password: Yup.string()
    .required('We need a password')
    .min(7, 'A bit secure please (+7 char)')
    .max(80, 'Really ? More than 80 chars ? Who are you ? Patrick Balkany ?'),
  code: Yup.string()
    .required(`Need a Alpha code ? Ask @shug0 !`)
    .matches(/CAPPUCCIN0F0RLIF3/, 'NOPE !')
})

export default signupValidationSchema
