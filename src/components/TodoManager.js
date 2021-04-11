import React from 'react';
import TodoComponent from './TodoComponent';

const TodoManager = ({todos, setTodos}) => {

    const deleteTodo = (e) => {
        let todo = JSON.parse(e.target.closest('button').value);
        setTodos(todos.filter(t => t.id !== todo.id));
    }

    const completeTodo = (e) => {
        let todo = JSON.parse(e.target.closest('button').value);
        if (!todo.completed)
            setTodos([{ ...todo, completed : true}, ...todos.filter(t => t.id !== todo.id)].sort((a, b) => a.completed - b.completed));
    };

    const renderTodos = () => {
        if (todos.length === 0)
            return (
                <div className="card my-3 btn-outline-dark">
                    <h1 className="text-center">No todo's yet!</h1>
                </div>
            );
        
        return todos.map( todo =>
            <TodoComponent 
                key={todo.id} 
                deleteTodo={deleteTodo} 
                completeTodo={completeTodo} 
                todoItem={todo} 
            />
        );
    };

    return (
        <div className="container">{ renderTodos() }</div>
    );
};

export default TodoManager;