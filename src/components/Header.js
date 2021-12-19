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

const ShakingRabbit = styled(MerryRabbit)`
  animation: ${shake} infinite 1.5s linear;
`

const Header = () => {
  return (
    <div>
      <Snowfall snowflakeCount={50} />
      <p>안뇽 병군삐❤️</p>
      <ShakingRabbit width={150} height={150} />
    </div>
  )
}

export default Header
