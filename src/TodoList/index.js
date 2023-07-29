import styled from "styled-components";
import React, { useState } from "react";
import trashcan from "../images/trashcan.png";

const ListContainer = styled.div`
  margin-left: 25px;
  margin-top: 15px;
  font-size: 19px;
  font-family: Pairfair Display;
`;

const TodoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const Checkbox = styled.input`
  margin-right: 10px;
  margin-top: 5px;
  width: 19px; 
  height: 19px; 
`;

function TodoList({ todos }) {
  const [checkedItems, setCheckedItems] = useState(
    todos.reduce((acc, todo) => {
      acc[todo.id] = todo.isCompleted;
      return acc;
    }, {})
  );

  const handleCheckboxClick = (event, todoId) => {
    const { checked } = event.target;
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [todoId]: checked,
    }));
  };

  return (
    <ListContainer>
      <div>
        {todos.map((todo) => (
          <TodoItem key={todo.id}>
            <Checkbox
              type="checkbox"
              checked={checkedItems[todo.id]}
              onChange={(event) => handleCheckboxClick(event, todo.id)}
            />
            {todo.text}
          </TodoItem>
        ))}
      </div>
    </ListContainer>
  );
}

export default TodoList;
