import styled from "styled-components";
import React, { useState, useEffect } from "react";

const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 25px;
  padding-left: 25px;
  padding-bottom:5px;
  font-size: 30px;
  font-family: Pairfair Display;
  color: #F46A6A;
`;

const DateLine = styled.p`
  margin: 0;
  width: 100%; 
`;

function TodoDate() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const hour = now.getHours().toString().padStart(2, "0");
      const minute = now.getMinutes().toString().padStart(2, "0");
      setCurrentTime(`${hour}:${minute}`);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const date = new Date();
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const formattedDay = date.toLocaleDateString("en-US", { weekday: "long" });


  return (
    <DateContainer>
      <DateLine>{formattedDay}</DateLine>
      <DateLine>{formattedDate}</DateLine>
      <DateLine>{currentTime}</DateLine>
    </DateContainer>
  );
}

export default TodoDate;
