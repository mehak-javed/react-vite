import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RollDice from './RollDice'
import { Button, OutlineButton } from './styled/Button'
import Rules from './Rules'

const GamePlay = () => {
    const [score, setScore] = useState(0)
    const [selectedNumber, setSelectedNumber] = useState()
    const [currentDice, setCurrentDice] = useState(4)
    const [error, seterror] = useState("")
    const [showrules, setShowRules] = useState(false)
    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    };
    const rollDice = () => {
        if(!selectedNumber){
            seterror("YOU HAVE NOT SELECTED ANY NUMBER")
            return
        }
        const randomNumber = generateRandomNumber (1, 7)
        setCurrentDice((prev) => randomNumber);

    if (selectedNumber === randomNumber ){
        setScore((prev) => prev + randomNumber)

    }
    else{
        setScore((prev) => prev - 2)
    }
    setSelectedNumber(undefined)
}
    const resetScore = () => {
        setScore(0)
    }
  return (

    <MainContainer>
        <div className='topSection'>
            <TotalScore score = { score }/>
            <NumberSelector seterror = {seterror} error = {error} selectedNumber={selectedNumber} setSelectedNumber= {setSelectedNumber}/>
        </div>
        <RollDice currentDice = { currentDice } rollDice = {rollDice} />
        <div className="btns">
            <OutlineButton onClick={resetScore}>Reset</OutlineButton>
            <Button onClick={() => setShowRules((prev) => !prev)}> {
                showrules ? "Hide" : "Show"
            }</Button>

        </div>
        {showrules && <Rules/>}
    </MainContainer>
  )
}

export default GamePlay
const MainContainer = styled.main`
padding-top: 10px;
.topSection{
    display: flex;
    justify-content: space-between;
    align-items: end;
}
.btns{
    margin-top: 40px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

}
    
`