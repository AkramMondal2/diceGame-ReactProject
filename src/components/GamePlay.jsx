import { useState } from "react";
import TotalScore from "./TotalScore";
import SelectNumber from "./SelectNumber";
import { styled } from "styled-components";
import RollDice from "./RollDice";
import { Button, OutLineButton } from "./Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState(" ");
  const [showRules, setShowRules] = useState(false)

  const generateRandomNumber = (min, max) => {
    // console.log(Math.floor(Math.random() * (max - min) + min))
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () => {
    if (!selectedNumber){
      setError("You have not selected any number")
       return;
    }

    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice(randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNumber(undefined);
  };

  const resetScore = () =>{
    setScore(0);
  }

  return (
    <>
      <TopSection>
        <TotalScore score={score} />
        <SelectNumber
          error = {error}
          setError ={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </TopSection>
      <RollDice currentDice={currentDice} rollDice={rollDice} />
      <Btn>
        <OutLineButton
          onClick={resetScore}
        >Reset Score</OutLineButton>
        <Button
         onClick={()=>setShowRules((prev)=> !prev)}
        >{showRules ? "Hide" : "Show"} Rules </Button>
      </Btn>
      {showRules && <Rules />} 
    </>
  );
};

export default GamePlay;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Btn = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  gap: 10px;
  margin-top: 30px;
`