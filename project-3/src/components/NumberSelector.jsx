import styled from 'styled-components'

const NumberSelector = ( { seterror, error, selectedNumber, setSelectedNumber }) => {
    const arrNumber = [1,2,3,4,5,6];
    const numberSelectorHandler = (value) => {
        setSelectedNumber(value)
        seterror("")
    }
  return (
    <NumberSelectorContainer>

    <p  className='error'>{ error }</p>
    <div className='flex'>
       {arrNumber.map((value, i) =>

       (<Box 
        isSelectedNumber = {value === selectedNumber}
       key={i} onClick={() => numberSelectorHandler(value) }>{value}</Box>))} 
    </div>
    <p>Selected Number</p>
    </NumberSelectorContainer>
  )
}

export default NumberSelector
const NumberSelectorContainer = styled.div`
display: flex;
flex-direction: column;
align-items: end;
   .flex{
    display: flex;
    gap: 24px;
   } 
   p{
    font-weight: 700;
    font-size: 24px;
   }
    .error{
    color: red;
    font-size: 20px;
    }

`;

const Box = styled.div`
    width: 72px;
    height: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    background-color: ${(props) => props.isSelectedNumber ? "black" : "white"};
    color: ${(props) => props.isSelectedNumber ? "white" : "black"};


`