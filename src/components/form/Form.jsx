import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addlist } from "../../redux/modules/todos";
import { addinput } from "../../redux/modules/input";

const Form = () => {
  const Store = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(Store);
  const [abc, setabc] = useState(0);

  const InputBox = styled.div`
    display: flex;
    padding: 20px;
    justify-content: center;
    align-items: center;
  `;
  const Title = styled.h1`
    text-align: center;
    padding-top: 20px;
  `;
  const Input = styled.input`
    width: 250px;
    height: 35px;
    margin-right: 20px;
  `;
  const Btn = styled.button`
    height: 35px;
    color: #fff;
    border: none;
    padding: 5px;
    background-color: #555;
    &:hover {
      background-color: #cdcdcd;
    }
    &:active {
      color: red;
    }
  `;
  const onChangeHandler = (event) => {
    const { value } = event.target;
    console.log(value);
    setabc(value);

    // dispatch(addinput(value));
    // console.log(Store);
  };

  return (
    <>
      <Title>Redux Todo List</Title>
      <InputBox>
        <Input type="text" onChange={onChangeHandler}></Input>
        <Btn>추가하기</Btn>
      </InputBox>
    </>
  );
};

export default Form;
