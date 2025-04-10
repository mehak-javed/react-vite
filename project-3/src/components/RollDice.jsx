import styled from 'styled-components'

const RollDice = ({rollDice, currentDice}) => {
    
  return (
    <DiceContainer>
        <div className='dice' onClick={rollDice}>
         <img src={`/images/dices/dice_${currentDice}.png`} alt="" />
        </div>
        <p>Click on dice to roll</p>
    </DiceContainer>
  )
}

export default RollDice

const DiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 48px;
    p{
        font-size: 24px;
    }
    .dice{
        cursor: pointer;
    }

`