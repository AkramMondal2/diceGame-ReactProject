import React from 'react'
import { styled } from 'styled-components'

const TotalScore = ({score}) => {
  return (
    <Totalscore>
        <h1>{score}</h1>
        <p>Totao Score</p>
    </Totalscore>
  )
}

export default TotalScore

const Totalscore = styled.div`
    width: 135px;
    display: grid;
    place-items: center;
    h1{
        font-size: 100px;
        font-weight: 500;
        color: #000000;
    }
    p{
        font-size: 24px;
        font-weight: 500;
        color: #000000;
    }
`