import React, { useState } from 'react'
import styled from 'styled-components'

const CHECKLIST = [
  {
    id: 0,
    title: '아이스링크장에 간다!!',
  },
  {
    id: 1,
    title: '밥 먹으러 간다!',
  },
  {
    id: 2,
    title: '아이스링크장에 간다',
  },
]

const CheckList = styled.div`
  font-family: 'Gamja Flower', cursive;
`

const Selection = () => {
  return (
    <>
      {CHECKLIST.map((item, index) => {
        return <CheckList key={index}>{item.title}</CheckList>
      })}
    </>
  )
}

export default Selection
