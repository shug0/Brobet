import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, Field, Formik } from 'formik'
import styled from 'styled-components'

import { Button , FormInput } from '../../../components'
import signupValidationSchema from './SignupValidationSchema'

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
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

export default class SignupForm extends Component {
  static defaultProps = {
    initialValues: {
      pseudo: '',
      email: '',
      password: '',
      code: ''
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
        validationSchema={signupValidationSchema}
        onSubmit={(values, { setSubmitting }) => {
          handleSubmit(values, setSubmitting)
        }}
        render={({isSubmitting}) => (
          <Form>
            {error && (
              <ErrorWrapper>
                {error.message}
              </ErrorWrapper>
            )}
            <FormWrapper>
              <Field name="pseudo" type="text" label="Pseudo" component={FormInput}/>
              <Field name="email" type="email" label="Email" component={FormInput}/>
              <Field name="password" type="password" label="Password" component={FormInput}/>
              <Field name="code" type="text" label="Alpha Code" component={FormInput}/>
            </FormWrapper>

            <ButtonWrapper>
              <Button href='/login' disabled={isSubmitting}>
                Login
              </Button>
              <Button color='primary' type='submit' disabled={isSubmitting}>
                Submit
              </Button>
            </ButtonWrapper>
          </Form>
        )}
      />
    )
  }
}
