import styled from "styled-components";
import React, { useState } from "react";
import TodoDate from "../TodoDate";
import TodoAdd from "../TodoAdd";
import TodoLeft from "../TodoLeft";
import TodoList from "../TodoList";

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
  width: 650px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-shadow: 2px 5px 25px rgba(0.2, 0.2, 0.6);
  border-radius: 2px;
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
    const currentTodo= todos[id -1];
    currentTodo.isDone =!currentTodo.isDone;
    setTodos([...todos]);
  };

  const removeTodo = (id) => {
    const newTodos = todos.filter((todo)=> todo.id !=id);
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
        <TodoList todos={todos} ></TodoList>
      </TodoContainer>
    </Container>
  );
}

export default MainPage;
