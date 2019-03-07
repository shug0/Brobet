import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { LabelWrapper, InputWrapper } from './styledComponents'

class FormInput extends PureComponent {
  static propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  }

  static defaultProps = {
    type: 'text'
  }

  render () {
    const { field, label, form, type } = this.props
    const { touched, errors } = form
    const { name } = field

    return (
      <React.Fragment>
        {touched[name] && errors[name] ? (
          <LabelWrapper htmlFor={name} error>{label} : {errors[name]}</LabelWrapper>
        ) : (
          <LabelWrapper htmlFor={name}>{label}</LabelWrapper>
        )}
        <InputWrapper {...field} type={type} error={touched[name] && errors[name]} />
      </React.Fragment>
    )
  }
}

export default FormInput
