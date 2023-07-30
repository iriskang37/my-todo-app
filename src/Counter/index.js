import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 200px;
  flex-direction: column;
  border-radius: 3px;
`;

const Button = styled.button`
  background-color: #FEA1A1;
  border: none;
  font-weight: 500;
  font-size: 25px;
  width: 170px;
  height: 70px;
  border-radius: 4px;
  margin-bottom: 8px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);

`;

const Count = styled.button`
  border: none;
  font-weight: 350;
  font-family: Pairfair Display;
  width: 170px;
  height: 140px;
  font-size: 35px;
  border-radius: 4px;
  background-color: white;
  margin-bottom: 8px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
`;

function CountQueuingStrategy() {
  const [count, setCount] = React.useState(0);

  function isEven() {
    return count % 2 === 0;
  }

  return (
    <Container>
      <Button onClick={() => setCount(count + 1)}>+</Button>
      <Count isEven={isEven()}>{count}</Count>
      <Button onClick={() => setCount(count - 1)}>-</Button>
    </Container>
  );
}

export default CountQueuingStrategy;
