import React from "react";
import "./App.css";
import styled, { css } from "styled-components";
import Button from "./components/Button";

const Appblock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

function App() {
  return (
    <Appblock>
      <Button>BUTTON</Button>
    </Appblock>
  );
}

export default App;
