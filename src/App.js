import React, { useState } from "react";
import "./App.css";
import styled, { css, ThemeProvider } from "styled-components";
import Button from "./components/Button";
import Dialog from "./components/dialog";

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

const ButtonGroup = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;

function App() {
  const [dialog, setDialog] = useState(false);

  const onClickBtn = () => {
    setDialog(true);
  };

  const onConfirm = () => {
    console.log("confirm");
    setDialog(false);
  };

  const onCancel = () => {
    console.log("cancel");
    setDialog(false);
  };

  return (
    <ThemeProvider
      theme={{
        palette: {
          blue: "#228be6",
          gray: "#495057",
          pink: "#f06595",
        },

        length: {
          large: css`
            height: 3rem;
            font-size: 1.25rem;
          `,
          medium: css`
            height: 2.25rem;
            font-size: 1rem;
          `,
          small: css`
            height: 1.75rem;
            font-size: 0.875rem;
          `,
        },
      }}
    >
      <>
        <AppBlock>
          <ButtonGroup>
            <Button size="large">BUTTON</Button>
            <Button>BUTTON</Button>
            <Button size="small">BUTTON</Button>
          </ButtonGroup>

          <ButtonGroup>
            <Button color="gray" size="large">
              BUTTON
            </Button>
            <Button color="gray">BUTTON</Button>
            <Button color="gray" size="small">
              BUTTON
            </Button>
          </ButtonGroup>

          <ButtonGroup>
            <Button color="pink" size="large">
              BUTTON
            </Button>
            <Button color="pink">BUTTON</Button>
            <Button color="pink" size="small">
              BUTTON
            </Button>
          </ButtonGroup>

          <ButtonGroup>
            <Button size="large" outline>
              BUTTON
            </Button>
            <Button color="gray" outline>
              BUTTON
            </Button>
            <Button color="pink" size="small" outline>
              BUTTON
            </Button>
          </ButtonGroup>

          <ButtonGroup>
            <Button size="large" fullwidth>
              BUTTON
            </Button>
            <Button size="large" color="gray" fullwidth>
              BUTTON
            </Button>
            <Button size="large" color="pink" fullwidth onClick={onClickBtn}>
              DELETE
            </Button>
          </ButtonGroup>
        </AppBlock>
        <Dialog
          title="정말로 삭제하시겠습니다?"
          confirmText="삭제"
          cancelText="취소"
          onCancel={onCancel}
          onConfirm={onConfirm}
          visible={dialog}
        >
          데이터를 정말로 삭제하시겠습니까?
        </Dialog>
      </>
    </ThemeProvider>
  );
}

export default App;
