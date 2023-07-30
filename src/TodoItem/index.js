import React, { useState } from 'react';
import styled, {css} from "styled-components";
import trashcan from "../images/trashcan.png";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;
const Check = styled.button`
  border-radius: 50px;
  border: 3px solid #106cde;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  ${(props) =>
    props.isDone &&
    css`
      background-color: #106cde;
    `}
`;
const Remove = styled.img`
  width: 20px;
  height: 25px;
  margin-left: auto;
`;

const Text = styled.div`
  font-size: 24px;
`;

function TodoItem({ todo, deleteTodo, switchStatus}){
    const onClickRemove = () => {
        deleteTodo(todo.id);
    };

    const onClickChange = () => {
      console.log("---------------")
      switchStatus(todo.id);
    };  

    return (
        <Container>
            <Check onClick={onClickChange} isDone={todo.isDone}/>
            <Text>{todo.text}</Text>
            <Remove src={trashcan} onClick={onClickRemove}/>
        </Container>
    );
}
export default TodoItem;