import styled from "styled-components";

export const TodoLists = styled.div`
  width: 517px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Todo = styled.div`
  width: 100%;
  display: flex;
  padding: 10px 12px;
  background-color: #ffffff;
  border-radius: 10px;
  align-items: center;
  justify-content: space-between;
`;

export const Checkbox = styled.input`
  width: 19px;
  height: 19px;
  background-color: #eaebed;
  border-radius: 8px;
`;

export const TodoText = styled.h5`
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
`;

export const TodoDate = styled.div`
  width: 60px;
  padding: 4px 8px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 8px;
  background: rgba(160, 172, 231, 0.1);
  color: #80848a;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const DeleteBtn = styled.div`
  width: 13px;
  height: 13px;
  cursor: pointer;
  border-radius: 4px;
  // border: 2px solid ${() => '#' + Math.floor(Math.random() * 16777215).toString(16)};
`;
