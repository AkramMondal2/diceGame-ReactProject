import styled from "styled-components"
import { Button } from "./Button";

const StartGame = ({toggle}) => {
  return (
    <Container>
        <div>
            <img src="/image/dices.png" alt="dicesPic" />
        </div>
        <div className="contant">
          <h1>DICE GAME</h1>
          <Button
            onClick={toggle}
          >
            play Now
          </Button>
        </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  .contant{
    display: flex;
    flex-direction: column;
    align-items: end;
    h1{
      font-size: 96px;
      font-weight: 700;
      line-height: 144px;
      white-space: nowrap;
    }
  }
`;
