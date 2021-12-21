import React, { useState } from 'react'
import styled from 'styled-components'
import A from '../assets/svgs/heart.svg'

const CHECKLIST = [
  {
    time: '11:00AM',
    left: '아직 문 안 연 카페',
    right: '아이스링크장',
  },
  {
    time: '1:00PM',
    left: '장어 덮밥',
    right: '고기 짬뽕',
  },
  {
    time: '3:00PM',
    left: '의자 편한 카페',
    right: '디저트 존마탱 카페',
  },
  {
    time: '5:00AM',
    left: '별마당 도서관 트리',
    right: '명동 신세계 트리',
  },
  {
    time: '7:00AM',
    left: '샤브샤브',
    right: '홈디너파티',
  },
]

const CheckList = styled.div`
  font-family: 'Gamja Flower', cursive;
`

const Caution = styled.div`
  font-size: 5px;
  animation: ${(props) => props.fadeIn} 5s infinite;
`

const Selection = ({ fadeIn }) => {
  const [selection, setSelection] = useState(CHECKLIST[0])
  return (
    <>
      <CheckList>{selection.left}</CheckList>
      <CheckList>{selection.right}</CheckList>
      <Caution fadeIn={fadeIn}>
        {'주의: 약간의 답정너가 포함되어 있는 점 양해 부탁드립니다.'}
      </Caution>
    </>
  )
}

export default Selection
