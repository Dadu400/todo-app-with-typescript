import React, { useState } from "react";
import GlobalStyles from "./styles/global";
import { Container } from "./styles/Container";
import { InputField } from "./styles/InputField";
import { TodoWrapper } from "./styles/TodoWrapper";
import {
  TodoLists,
  Todo,
  Checkbox,
  TodoText,
  TodoDate,
  DeleteBtn,
} from "./styles/TodoLists";
import { Todos } from "./Interfaces";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todos[]>([]);
  const [hoveredTodo, setHoveredTodo] = useState<Todos | null>(null);

  const onNewTaskEntered = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && e.currentTarget.value !== "") {
      const newTodo: Todos = {
        title: e.currentTarget.value,
        checked: false,
        date: Date.now(),
      };
      setTodos((prevTodos) => [newTodo, ...prevTodos]);
      setTodo("");
    }
  };

  const onTodoDeleted = (todoToDelete: Todos) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo !== todoToDelete));
  };

  const onCheckboxClicked = (todoToToggle: Todos) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo === todoToToggle) {
          return { ...todo, checked: !todo.checked };
        }
        return todo;
      })
    );
  };

  const getRandomInt = (max: number): number => {
    return Math.floor(Math.random() * max);
  };

  return (
    <Container>
      <GlobalStyles />
      <InputField
        placeholder="Create new task"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        onKeyDown={onNewTaskEntered}
      />
      <TodoLists>
        {todos.map((todoItem, index) => (
          <Todo
            key={index}
            onMouseEnter={() => setHoveredTodo(todoItem)}
            onMouseLeave={() => setHoveredTodo(null)}
          >
            <TodoWrapper>
              <Checkbox
                type="checkbox"
                checked={todoItem.checked}
                onChange={() => onCheckboxClicked(todoItem)}
              />
              <TodoText
                style={{
                  textDecoration: todoItem.checked ? "line-through" : "none",
                }}
              >
                {todoItem.title}
              </TodoText>
            </TodoWrapper>
            <TodoWrapper>
              {hoveredTodo === todoItem && (
                <TodoDate>
                  {new Date(todoItem.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}
                </TodoDate>
              )}
              <DeleteBtn
                style={{
                  borderColor: `rgb(${getRandomInt(255)}, ${getRandomInt(
                    255
                  )}, ${getRandomInt(255)})`,
                }}
                onClick={() => onTodoDeleted(todoItem)}
              />
            </TodoWrapper>
          </Todo>
        ))}
      </TodoLists>
    </Container>
  );
};

export default App;
