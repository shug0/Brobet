import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, Field, Formik } from 'formik'
import styled from 'styled-components'

import { Button, FormInput, Logo } from '../../../components'

import loginValidationSchema from './loginValidationSchema'

const FormWrapper = styled(Form)`
  width: 350px;
  margin: auto;
`

const FieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  button {
    margin-right: 1rem;
  }
`

const ErrorWrapper = styled.p`
  margin-bottom: 1rem;
  color: ${({theme}) => theme.colors.warning};
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
  button {
    margin-left: 1.5rem;
  }
`

export default class LoginForm extends Component {
  static defaultProps = {
    initialValues: {
      email: '',
      password: ''
    }
  }

  static propTypes = {
    error: PropTypes.any,
    initialValues: PropTypes.object,
    handleSubmit: PropTypes.func
  }

  render () {
    const { initialValues, handleSubmit, error } = this.props

    return (
      <Formik
        initialValues={initialValues}
        validationSchema={loginValidationSchema}
        onSubmit={(values, { setSubmitting }) => {
          handleSubmit(values, setSubmitting)
        }}
        render={({isSubmitting}) => (
          <FormWrapper>
            <Logo />
            {error && (
              <ErrorWrapper>
                {error.message}
              </ErrorWrapper>
            )}
            <FieldsWrapper>
              <Field name="email" type="email" label="Email" component={FormInput}/>
              <Field name="password" type="password" label="Password" component={FormInput}/>
            </FieldsWrapper>

            <ButtonWrapper>
              <Button href='/signup'>
                Signup
              </Button>

              <Button color='primary' type='submit' disabled={isSubmitting}>
                Login
              </Button>
            </ButtonWrapper>
          </FormWrapper>
        )}
      />
    )
  }
}
