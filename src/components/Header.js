import React from 'react'
import styled, { keyframes } from 'styled-components'
import Snowfall from 'react-snowfall'
import { ReactComponent as MerryRabbit } from '../assets/svgs/MerryRabbit.svg'

const shake = keyframes`
    0%{
        transform: rotate(-10deg);
    }
    50%{
        transform: rotate(10deg);
    }
    100%{
        transform: rotate(-10deg);
    }
`
const HeaderContainer = styled.div`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20%;
`

const HeaderTitle = styled.text`
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-family: 'Gamja Flower', cursive;
`

const ShakingRabbit = styled(MerryRabbit)`
  animation: ${shake} infinite 1.5s linear;
`

const Header = () => {
  return (
    <HeaderContainer>
      <Snowfall snowflakeCount={40} />
      <ShakingRabbit width={150} height={150} />
      <HeaderTitle>안뇽 병군삐❤️</HeaderTitle>
    </HeaderContainer>
  )
}

export default Header
