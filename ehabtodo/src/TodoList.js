//Ehab Karamullah Sharief-2134578


import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup'; 
import TodoForm from './TodoForm';
import todoItems from './todoItems';

function TodoList() {
  const [todos, setTodos] = useState(todoItems);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const updateDescription = (index, newDescription) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, description: newDescription } : todo
    );
    setTodos(updatedTodos);
  };

  const updateDueDate = (index, newDueDate) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, dueDate: newDueDate } : todo
    );
    setTodos(updatedTodos);
  };

  // Function to determine the variant based on the due date
  const getVariant = (dueDate) => {
    const currentDate = new Date();
    const dueDateObj = new Date(dueDate);
    const diffTime = dueDateObj - currentDate;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 2) return 'danger'; // red
    if (diffDays <4) return 'warning'; // yellow
    if (diffDays <7) return 'primary'; // green
    return 'primary'; // blue
  };

  return (
    <Container>
      <Row className="text-center my-4">
        <Col><h1>Assignment 2: ToDo List</h1></Col>
      </Row>

      <Row>
        <Col md={4}>
          <TodoForm addTodo={addTodo} />
        </Col>
        <Col md={8}>
          <ListGroup role="tablist">
            {todos.map((todo, index) => {
              const variant = getVariant(todo.dueDate);

              return (
                <ListGroup.Item
                  key={todo.id}
                  className={`list-group-item-${variant}`}
                  role="tabpanel"
                >
                  <a className={`list-group-item-${variant}`} role="tab">
                    <h5>{todo.title}</h5>
                  </a>
                  <p>{todo.description}</p>
                  <small>Due: {todo.dueDate}</small>
                  {/* */}
                  <input type="hidden" value={todo.dueDate} />
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default TodoList;
