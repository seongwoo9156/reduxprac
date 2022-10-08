import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import { addlist } from "../../redux/modules/todos";

const List = () => {
  const listStore = useSelector((state) => state);

  const dispatch = useDispatch();

  const ListBox = styled.div`
    display: flex;
    flex-wrap: wrap;
  `;

  const List = styled.div`
    background-color: #333;
    color: #fff;
    width: 150px;
    height: 150px;
    padding: 10px;
    margin: 10px;
  `;

  return (
    <ListBox>
      {listStore.todos.map((e) => {
        return <List key={e.id}>{e.title}</List>;
      })}
    </ListBox>
  );
};

export default List;
