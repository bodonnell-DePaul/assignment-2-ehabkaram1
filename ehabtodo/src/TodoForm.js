//Ehab Karamullah Sharief-2134578



import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './TodoForm.css';

function TodoForm() {
  return (
    <Form className="todo-form">
      <Form.Group controlId="formTodoTitle">
        <Form.Label>ToDo Item</Form.Label>
        <Form.Control
          type="text"
          placeholder="Add todo item"
          required
        />
      </Form.Group>
      <Form.Group controlId="formDueDate" className="mt-3">
        <Form.Label>Due Date</Form.Label>
        <Form.Control
          type="date"
          placeholder="mm/dd/yyyy" 
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="mt-3">
        Add Todo
      </Button>
    </Form>
  );
}

export default TodoForm;
