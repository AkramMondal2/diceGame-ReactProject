import React from 'react'
import { styled } from 'styled-components'

const SelectNumber = ({selectedNumber, setSelectedNumber, error, setError}) => {
 
  // console.log(selectedNumber)
  const arrNumber = [1, 2, 3, 4, 5, 6]
  const selectedNumberHandler = (value) =>{
    setSelectedNumber(value)
    setError(" ")
  }
  return (
    <Select>
      <p className='error'>{error}</p>
       <div className='Boxdiv'>
        {
          arrNumber.map((value, i)=> 
          <Box 
          $isselectednumber= {value === selectedNumber}
          key={i}
          onClick={()=>selectedNumberHandler(value)}
          >
            {value}
          </Box>
          )  
        }
       </div>
       <div>
          <p>Select Number </p>
       </div>
    </Select>
  )
}

export default SelectNumber

const Select = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 12px;
  margin-top: 20px;
    .error{
      color: #ff0000;
    }
    .Boxdiv{
      display: flex;
      gap: 24px;
    }
    p{
        font-weight: 600;
        font-size: 24px;
    }
`
const Box = styled.div`
    display: grid;
    place-items:center;
    width: 45px;
    padding: 18px 0px;
    border: 2px solid  #000000;
    color: ffffff;
    font-weight: 600;
    font-size: 24px;
    cursor: pointer;
    background-color: ${(props) => (props.$isselectednumber?"black":"white")};
    color: ${(props) => (!props.$isselectednumber?"black":"white")};
`  