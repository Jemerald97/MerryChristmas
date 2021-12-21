import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
//import useMediaQuery from 'react-responsive'
import Snowfall from 'react-snowfall'
import { ReactComponent as MerryRabbit } from '../assets/svgs/MerryRabbit.svg'
import { ReactComponent as InitialTree } from '../assets/svgs/Tree.svg'

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
  margin: 20px;
`
const ShakingRabbit = styled(MerryRabbit)`
  width: 100px;
  height: 100px;
  margin: 5%;
  animation: ${shake} infinite 1.5s linear;
`
const HeaderTitle = styled.div`
  font-size: 1.5rem;
  font-family: 'Gamja Flower', cursive;
`

const MESSAGE = [
  '안뇽 병군삐❤️',
  `나 물어볼 거 있어ㅎㅎ`,
  '크리스마스 때 계획을',
  '오빠가 완성해주지 않을래?',
  '바보야!!',
  '밑에 나무를 눌러봐바',
]

let i = 0
const Header = () => {
  const [message, setMessage] = useState(MESSAGE[0])
  const onChangeMessage = () => {
    i === 5 ? (i = 0) : (i = i + 1)
    console.log(i)
    setMessage(MESSAGE[0 + i])
  }
  return (
    <HeaderContainer>
      <Snowfall snowflakeCount={80} />
      <ShakingRabbit onClick={onChangeMessage} />
      <HeaderTitle>{message}</HeaderTitle>
      {i === 5 && <InitialTree />}
    </HeaderContainer>
  )
}

export default Header
