import React from "react";
import GlobalStyles from './styles/global'
import { Container } from "./styles/Container";
import { InputField } from "./styles/InputField";
import { TodoWrapper } from "./styles/TodoWrapper";
import { TodoLists, Todo, Checkbox, TodoText, TodoDate } from "./styles/TodoLists";

const App: React.FC = () => {
  return (
      <Container>
        <GlobalStyles />
        <TodoWrapper>
          <InputField placeholder="Create new task" />
          <TodoLists> 
            <Todo>
            <Checkbox type="checkbox"/>
            <TodoText />
            <TodoDate/>
            </Todo>
          </TodoLists>
        </TodoWrapper>
      </Container>
  );
};

export default App;
