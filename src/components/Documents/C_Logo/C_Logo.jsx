import React from 'react'
import { Wrapper, CutWrapper, Letter } from './C_Logo.styles'
import stringToColor from '../../../utils/stringToColor'

const C_Logo = ({category = '123'}) => (
  <Wrapper>
    <CutWrapper>
      <Letter logocolor={stringToColor(category)}>C</Letter>
    </CutWrapper>
  </Wrapper>
)

export default C_Logo