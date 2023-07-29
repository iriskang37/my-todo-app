import styled from "styled-components";
import React, { useState, useEffect } from "react";

const Container = styled.div`
  margin-left: 25px;
  margin-top: 20px;
  font-family: Pairfair Display;
  font-size: 18px;
  height: 40px;
  width: 300px;
  background-color: #FEA1A1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;

function TodoLeft({ todos }) {
  const completedTodos = todos.filter((todo) => todo.isCompleted);

  return (
    <Container>
      <div>{todos.length} left, {completedTodos.length} completed</div>
    </Container>
  );
}

export default TodoLeft;
