import styled from "styled-components"
export const Button = styled.button`
width: 220px;
height: 44px;
padding: 10px 18px; 
border-radius: 5px;
gap: 10px;
background-color: #000000;
color: #ffffff;
font-size :16px;
border: 1px solid transparent;
transition: 0.4s background ease-in;

&:hover{
  cursor: pointer;
  background-color: #ffffff;
  color: #000000;
  border: 1px solid black;
  transition: 0.3s background ease-in;
}
`;
export const OutLineButton = styled(Button)`
  background-color: #ffffff;  
  color: #000000;
  border: 1px solid black;
&:hover{
  cursor: pointer;
  background-color: #000000;
  color: #ffffff;
  border: 1px solid transparent;
}
`