import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import OrangeSock from '../assets/pngs/orangeSock.png'
import PurpleSock from '../assets/pngs/purpleSock.png'
import BlueStick from '../assets/pngs/blueStick.png'
import RedStick from '../assets/pngs/redStick.png'
import GoldStar from '../assets/pngs/goldStar.png'
import SilverStar from '../assets/pngs/silverStar.png'
import PresentBox from '../assets/pngs/presentBox.png'
import Heart from '../assets/pngs/heart.png'
let i = 0
const CHECKLIST = [
  {
    time: '11:00AM',
    left: '잠을 조금 더 자고싶다..!',
    right: '아이스링크장',
    leftImg: OrangeSock,
    rightImg: PurpleSock,
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

const CheckList = styled.div`
  font-family: 'Gamja Flower', cursive;
`

const SelectionContainer = styled.div`
  position: relative;
  top: 400px;
  flex-direction: row;
`
const Img = styled.img`
  width: 50px;
`

const Selection = () => {
  const [selection, setSelection] = useState(CHECKLIST[0])
  const [deco, setDeco] = useState(false)
  const onSelect = () => {
    i = i + 1
    setSelection(CHECKLIST[i])
  }
  return (
    <div>
      <SelectionContainer>
        <Img src={selection.leftImg} id="1" onClick={onSelect} />
        <CheckList>{selection.left}</CheckList>
      </SelectionContainer>
      <SelectionContainer>
        <Img src={selection.rightImg} id="2" onClick={onSelect} />
        <CheckList>{selection.right}</CheckList>
      </SelectionContainer>
    </div>
  )
}

export default Selection
