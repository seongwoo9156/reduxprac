import styled from "styled-components";
import "./App.css";
import Form from "./components/form/Form";
import List from "./components/list/List";
import Globalstyle from "./components/globalstyled/Globalstyle";
import { useState } from "react";

function App() {
  

  const Wrap = styled.div`
    max-width: 1200px;
    width: 95%;
    min-height: 500px;
    background-color: #fff;
    margin: 0 auto;
  `;

  return (
    <>
      <Globalstyle />
      <Wrap>
        <Form></Form>
        <List></List>
      </Wrap>
    </>
  );
}

export default App;
