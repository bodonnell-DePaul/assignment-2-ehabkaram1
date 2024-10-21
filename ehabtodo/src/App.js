//Ehab Karamullah Sharief-2134578

import React, { useState } from 'react';
import { Container, Row, Col, ListGroup, Tab, Form } from 'react-bootstrap';
import './App.css';
import todos from './todoItems';
import TodoForm from './TodoForm';

const getColorVariant = (dueDate) => {
  const today = new Date();
  const due = new Date(dueDate);
  const timeDiff = (due - today) / (1000 * 60 * 60 * 24);

  if (timeDiff < 2) return 'danger';
  if (timeDiff < 4) return 'warning';
  if (timeDiff < 7) return 'success';
  return 'primary';
};

function App() {
  const [todoItems, setTodoItems] = useState(todos);
  const [activeTab, setActiveTab] = useState(null);

  const addTodo = (newTodo) => {
    setTodoItems([...todoItems, newTodo]);
  };

  return (
    <Container>
      <header className="text-center my-4">
        <h1>Assignment 2: Ehab's ToDo List</h1>
      </header>

      <Row>
        <Col md={4} className="mb-4">
  <TodoForm addTodo={addTodo} />
        </Col>
        <Col md={8}>
          <Tab.Container id="list-group-tabs" activeKey={`#link${activeTab}`}>
            <Row>
              <Col sm={4}>
                <ListGroup>
                  {todoItems.map((todo) => (
                    <ListGroup.Item
                      action
                      href={`#link${todo.id}`}
                      key={todo.id}
                      variant={getColorVariant(todo.dueDate)}
                      onClick={() => setActiveTab(todo.id)}
                    >
                      {todo.title}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Col>
              <Col sm={8}>
                <Tab.Content>
                  {todoItems.map((todo) => (
                    <Tab.Pane eventKey={`#link${todo.id}`} key={todo.id}>
                      <h5></h5>
                      <p
                        contentEditable
                        onBlur={(e) => {
                          const updatedTodos = todoItems.map((item) =>
                            item.id === todo.id
                              ? { ...item, description: e.target.innerText }
                              : item
                          );
                          setTodoItems(updatedTodos);
                        }}
                      >
                        {todo.description}
                      </p>
                      <h5>Due Date</h5>
                      <Form.Control
                        type="date"
                        value={todo.dueDate}
                        onChange={(e) => {
                          const updatedTodos = todoItems.map((item) =>
                            item.id === todo.id
                              ? { ...item, dueDate: e.target.value }
                              : item
                          );
                          setTodoItems(updatedTodos);
                        }}
                      />
                    </Tab.Pane>
                  ))}
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
