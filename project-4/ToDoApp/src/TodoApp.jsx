import styled from 'styled-components'
import { useState } from 'react';
import './App.css'
function TodoApp() {
    const [todolist, setToDoList] = useState([]);

    let saveToDoList = (event) => {
        event.preventDefault();
        let todoname = event.target.todoname.value;

        //alert(todoname);

        if(!todolist.includes(todoname)){
            let finaltodoList = [...todolist, todoname];
            setToDoList(finaltodoList)
        }
        else{
            alert("Already Existing the list!!...")
        }
    }
    let list = todolist.map((value, index) =>{
        return(
            <ToDoListItems value = {value} key = {index} indexNumber = {index} 
            todolist = {todolist} setToDoList = {setToDoList}/>
        )
    })
  return (
    <>
        <ConatinerWrapper>
            <MidContainer>
                <h1>To-Do App</h1>
                <FormContainer onSubmit={saveToDoList}>
                    <input  type = "text" name ='todoname' onSubmit={'buttonFocus'}/>
                    <button >Save</button>
                </FormContainer>
                <ul> 
                    {list}
                </ul>
            </MidContainer>
        </ConatinerWrapper>
    </>
  )
}

export default TodoApp
function ToDoListItems({value, indexNumber, todolist, setToDoList}){
    let [status, setStatus] = useState(false)
    let deleteRow = () => {
        //pick the indexnumber that is not the i of filter function(delete func)
        //i jo k delete k func mn ha usko chor k indexNumber nikal k set krdo list mn
        let finalData = todolist.filter((v,i) => i!== indexNumber);
        setToDoList(finalData)

    }
    let checkStatus = () =>{
        setStatus(!status)
    }
    return(
        <li onClick = {checkStatus} className = {(status)? 'completetodo ' : ''} >
           {value} <span onClick={deleteRow}> &times; </span>
        </li>
    )

}

const ConatinerWrapper = styled.div`
  max-width: 980px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  h1{
    font-size: 90px;
    color: black;

  }
`;
const MidContainer = styled.div`
    max-width: 780px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;

`;
const FormContainer = styled.form`
max-width: 100%;
display: flex;
justify-content: center;
flex-direction: row;
gap: 17px;
input{
    padding: 15px 200px;
    border: 2px solid black;
    border-radius: 5px;
    outline: none;
}
input:-webkit-autofill {
  background-color: #bacdcf !important; 
  transition: background-color 5000s ease-in-out 0s;
  -webkit-text-fill-color: #000 !important; 
}

button{
    padding: 10px 50px;
    border: 2px solid black;
    border-radius: 5px;
    background-color: transparent;
    color: black;
    font-size: 18px;

}

button:hover{
    color: white;
    background-color: black;
}
`;
