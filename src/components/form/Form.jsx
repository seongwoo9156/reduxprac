import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addlist } from "../../redux/modules/todos";

const InputBox = styled.div`
  display: flex;
  padding: 20px;
  justify-content: center;
  align-items: center;

  input {
    width: 250px;
    height: 35px;
    margin-right: 20px;
  }

  button {
    height: 35px;
  }
`;
const Title = styled.h1`
  text-align: center;
  padding-top: 20px;
`;

let count = 0;

const Form = () => {
  const Store = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(Store);

  const [title, setitle] = useState("");

  const onChangeHandler = (event) => {
    setitle(event.target.value);
    console.log(title);
  };

  const add = () => {
    if (title === "") return;
    dispatch(
      addlist({
        id: Store.todos.length + 1,
        title,
      })
    );
  };

  console.log();

  return (
    <>
      <Title>Redux Todo List</Title>
      <InputBox>
        {/* <Input type="text" onChange={onChangeHandler}></Input>
        <Btn>추가하기</Btn> */}
        <input name="title" type="text" onChange={onChangeHandler} />
        <button onClick={add}>추가하기</button>
      </InputBox>
    </>
  );
};

export default Form;
