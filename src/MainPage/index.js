import styled from "styled-components";
import React, { useState } from "react";
import TodoDate from "../TodoDate";
import TodoAdd from "../TodoAdd";
import TodoLeft from "../TodoLeft";
import TodoList2 from "../TodoList2";
import Counter from "../Counter";

const Container = styled.div`
  height: 100vh;
  background-color: #FEA1A1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const TodoContainer = styled.div`
  background-color: #F9FBE7;
  width: 600px;
  height: 470px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-shadow: 2px 5px 25px rgba(0.2, 0.2, 0.6);
  border-radius: 2px;
`;

const CounterContainer = styled.div`
  width: 300px;
  height: 470px;
  background-color: #F9FBE7;
  box-shadow: 2px 5px 25px rgba(0.2, 0.2, 0.6);
  border-radius: 2px;
  padidng: 30px;
  margin-left: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const TodoAddContainer = styled.div`
  margin-top: 15px;
  padding: 0 20px;
`;

function MainPage() {
  const [todos, setTodos] = useState([]);

  const updateTodoList = (todo) => {
    setTodos([...todos, todo]);
  };

  const changeIsDone = (id) => {
    const copyTodos = [...todos];

    for (let i = 0; i<todos.length; i++){
      if (todos[i].id ==id){
        copyTodos[i].isDone =!copyTodos[i].isDone;
      }
      setTodos(copyTodos);
    };

  }

  const removeTodo = (id) => {
    const newTodos = todos.filter((todo)=> todo.id !==id);
    setTodos(newTodos);
  }
  console.log(todos);

  return (
    <Container>
      <TodoContainer>
        <TodoDate></TodoDate>
        <TodoLeft todos={todos}></TodoLeft>
        <TodoAddContainer>
          <TodoAdd todos={todos} updateTodoList={updateTodoList}></TodoAdd>
        </TodoAddContainer>
        <TodoList2 
          todos={todos}
          switchStatus={changeIsDone}
          deleteTodo={removeTodo}
         ></TodoList2>
      </TodoContainer>
      <CounterContainer><Counter></Counter></CounterContainer>
    </Container>
  );
}

export default MainPage;
