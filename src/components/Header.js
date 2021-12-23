import React, { useState, useEffect } from 'react'
import styled, { keyframes, css } from 'styled-components'
import Snowfall from 'react-snowfall'
import Selection from './Selection'
import { ReactComponent as MerryRabbit } from '../assets/svgs/MerryRabbit.svg'
import { ReactComponent as InitialTree } from '../assets/svgs/Tree.svg'
import OrangeSock from '../assets/pngs/orangeSock.png'
import PurpleSock from '../assets/pngs/purpleSock.png'
import BlueStick from '../assets/pngs/blueStick.png'
import RedStick from '../assets/pngs/redStick.png'
import GoldStar from '../assets/pngs/goldStar.png'
import SilverStar from '../assets/pngs/silverStar.png'
import BlueSnow from '../assets/pngs/blueSnow.png'
import PinkSnow from '../assets/pngs/pinkSnow.png'
import PresentBox from '../assets/pngs/presentBox.png'
import Heart from '../assets/pngs/heart.png'

let i = 5
const CHECKLIST = [
  {
    time: '11:00AM',
    left: '잠을 조금 더 자고싶다..!',
    right: '아이스링크장',
    leftImg: OrangeSock,
    rightImg: PurpleSock,
    top: 10,
    left: -10,
  },
  {
    time: '1:00PM',
    left: '장어 덮밥',
    right: '고기 짬뽕',
    leftImg: Heart,
    rightImg: Heart,
  },
  {
    time: '3:00PM',
    left: '의자 편한 카페',
    right: '디저트 존마탱 카페',
    leftImg: BlueStick,
    rightImg: RedStick,
  },
  {
    time: '5:00AM',
    left: '별마당 도서관 트리',
    right: '명동 신세계 트리',
    leftImg: PresentBox,
    rightImg: PresentBox,
  },
  {
    time: '7:00AM',
    left: '샤브샤브',
    right: '홈디너파티',
    leftImg: SilverStar,
    rightImg: GoldStar,
  },
]
const MESSAGE = [
  '안뇽 병군삐❤️',
  `나 물어볼 거 있어ㅎㅎ`,
  '크리스마스 때 계획을',
  '오빠가 완성해주지 않을래?',
  '바보야!!',
  '둘 중에 하고 싶은거 나무에 걸어줘!!',
]

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
const Caution = styled.div`
  font-size: 5px;
  animation: ${(props) => props.fadeIn} 5s infinite;
`
const Tree = styled(InitialTree)`
  position: absolute;
  left: 0px;
  animation: ${fadeIn} 2s linear;
`
const Img = styled.img`
  position: relative;
  width: 50px;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
`

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
      <HeaderTitle>{message}</HeaderTitle>
      {i === 5 && (
        <>
          <Tree />
          <Img src={OrangeSock} />
          <Img src={BlueStick} />
          <Img src={Heart} />
          <Img src={SilverStar} />
          <Img src={PresentBox} />
          <Img src={BlueSnow} />
        </>
      )}
      {i === 5 && (
        <>
          <Selection fadeIn={fadeIn} />
          <Caution fadeIn={fadeIn}>
            {'주의: 약간의 답정너가 포함되어 있는 점 양해 부탁드립니다.'}
          </Caution>
        </>
      )}
    </HeaderContainer>
  )
}

export default Header
