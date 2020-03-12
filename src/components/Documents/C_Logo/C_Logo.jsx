import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, CutWrapper, Letter } from './C_Logo.styles'
import stringToColor from '../../../utils/stringToColor'

const C_Logo = ({category = '123'}) => (
  <Wrapper>
    <CutWrapper>
      <Letter logocolor={stringToColor(category)}>C</Letter>
    </CutWrapper>
  </Wrapper>
)

C_Logo.propTypes = {
  category: PropTypes.string.isRequired
}

export default C_Logo