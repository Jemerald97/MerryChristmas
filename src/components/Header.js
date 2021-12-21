import React, { useState, useEffect } from 'react'
import styled, { keyframes, css } from 'styled-components'
import Snowfall from 'react-snowfall'
import Selection from './Selection'
import { ReactComponent as MerryRabbit } from '../assets/svgs/MerryRabbit.svg'
import { ReactComponent as InitialTree } from '../assets/svgs/Tree.svg'
let i = 0
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

const fadeIn = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`
const fadeOut = keyframes`
  from{
    opacity: 1;
  }
  to{
    opacity: 0;
  }
`

const HeaderContainer = styled.div`
  margin: 20px;
`
const ShakingRabbit = styled(MerryRabbit)`
  width: 100px;
  height: 100px;
  margin: 5%;
  animation: ${shake} infinite linear 1.5s;
`
const HeaderTitle = styled.div`
  animation: ${fadeIn} 3s linear;
  font-size: 1.5rem;
  font-family: 'Gamja Flower', cursive;
`

const Tree = styled(InitialTree)`
  animation: ${fadeIn} 2s linear;
`

const MESSAGE = [
  '안뇽 병군삐❤️',
  `나 물어볼 거 있어ㅎㅎ`,
  '크리스마스 때 계획을',
  '오빠가 완성해주지 않을래?',
  '바보야!!',
  '둘 중에 하고 싶은거 나무에 걸어줘!!',
]

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
      {i !== 5 && <ShakingRabbit onClick={onChangeMessage} />}
      {i === 5 && <Tree />}
      <HeaderTitle>{message}</HeaderTitle>
      {i === 5 && <Selection fadeIn={fadeIn} />}
    </HeaderContainer>
  )
}

export default Header
