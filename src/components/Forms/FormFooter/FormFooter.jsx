import React from 'react'
import { Text, URL} from './FormFooter.styles'

const FormFooter = ({url, urlText, text}) => (
  <Text align="center">
    {text}
    <URL to={url}>{urlText}</URL>
  </Text>
)

export default FormFooter