import { styled } from 'styled-components'

const RollDice = ({currentDice, rollDice}) => {

  return (
    <MainDiceContainer>
        <div className='dice' onClick={rollDice}>
            <img src={`/image/dice_${currentDice}.png`} alt="dice" />
        </div>
        <p>Click on Dice to roll</p>
    </MainDiceContainer>
  )
}

export default RollDice

const MainDiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 8px;
    .dice{
        width: 250px;
        height:250px;
        cursor: pointer;
    }
    p{
        font-size: 24px;
        font-weight: 500;
    }   
`