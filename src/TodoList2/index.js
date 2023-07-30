import React from "react";
import styled from "styled-components";
import TodoItem from "../TodoItem";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
    font-family: Pairfair Display;
`;

function TodoList({todos, switchStatus, deleteTodo}) {
    console.log(todos);
    return(
      <Container>
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            deleteTodo={deleteTodo}
            switchStatus={switchStatus}
            ></TodoItem>
        ))}
      </Container>
    )
  }
  
  export default TodoList;