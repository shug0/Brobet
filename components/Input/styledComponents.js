import styled from 'styled-components'
import { transparentize } from 'polished'

export const LabelWrapper = styled.label`
  display: block;
  font-weight: 500;
  padding-bottom: 0.5rem;
  color: ${({ theme, error }) => error ? theme.colors.warning : theme.colors.fontLight};
`

export const InputWrapper = styled.input`
  border-radius: 4px;
  background: white;
  padding: 0.8rem 1rem;
  font-size: 1rem;
  display: inline-block;
  outline: 0;
  box-shadow: 
    0 4px 6px rgba(50,50,93,.11), 
    0 1px 3px rgba(0,0,0,.08);
  ;
  border: 2px solid ${({ theme, error }) => error ? (
    transparentize(0.5, theme.colors.warning)
  ) : (
    'transparent'
  )};
  transition: ease all 0.1s;
  font-weight: 300;
  width: 100%;
  margin-bottom: 1rem;
  &:active, &:focus {
    box-shadow: 
      0 7px 14px rgba(50,50,93,.1), 
      0 3px 6px rgba(0,0,0,.08);
    ;
    border: 2px solid ${({ theme }) => transparentize(0.5, theme.colors.secondary)};
  }
`
