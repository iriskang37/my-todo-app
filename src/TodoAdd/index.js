import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin-top: 5px;
`;

const Input = styled.input`
  font-size: 18px;
  border: none;
  background-color: #FFF;
  width: 100%;
  height: 32px;
  padding: 5px;
  font-family: Pairfair Display;
  border-radius: 4px;
  margin-left: 3px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
`;

const Button = styled.button`
  background-color: #FEA1A1;
  border: none;
  width: 32%;
  height: 42px;
  font-weight: 500;
  font-family: Pairplay Display;
  font-size: 18px;
  border-radius: 4px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
`;

function TodoAdd({ todos, updateTodoList }) {
  const [todo, setTodo] = useState({
    id: null,
    text: "",
    isCompleted: false,
  });

  const addTodo = (event) => {
    const { name, value } = event.target;
    setTodo({
      id: todos.length + 1,
      text: value,
      isCompleted: false,
    });
  };

  console.log(todo);

  const onClickChange = () => {
    updateTodoList(todo);
    setTodo({
      id: null,
      text: "",
      isCompleted: false,
    });
  };

  return (
    <Container>
      <Input
        type="text"
        name="text"
        value={todo.text}
        onChange={addTodo}
      />
      <Button onClick={onClickChange}>Add</Button>
    </Container>
  );
}

export default TodoAdd;
