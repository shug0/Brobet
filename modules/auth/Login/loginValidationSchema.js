import * as Yup from 'yup'

const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Where I send spam without email ?')
    .email('A valid mail please'),
  password: Yup.string()
    .required('We need a password')
    .min(7, 'A bit secure please (+7 char)')
    .max(80, 'Really ? More than 80 chars ? Who are you ? Patrick Balkany ?')
})

export default loginValidationSchema
