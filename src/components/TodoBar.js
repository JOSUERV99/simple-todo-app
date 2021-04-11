import React, { useState } from 'react';
import logo from '../logo.svg';

const TodoBar = ({todos, setTodos}) => {

    const [todo, setTodo] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todo) {
            setTodos([...todos, todo]);
            setTodo(null);
            e.target.reset();
            e.target.getElementsByTagName('input')[0].focus();
        }
    }

    const handleChange = (e) => setTodo({title : e.target.value, completed : false, id: todos.length + 1});
    const deleteAll = (_) => setTodos([]);
    const completeAll = (_) => setTodos(todos.map(t => ({...t,completed:true})));

    return (
    <header className="card-header bg-warning d-block">
        <form className="form" onSubmit={handleSubmit}>
            <div className="form-group row px-4">
                <img src={logo} alt="page-icon" width="50"></img>
                <span className="title text-dark d-flex justify-content-center text-capitalize mx-4" style={{fontSize:"24px"}}>SimpleTodoApp!</span>
                <input
                    className="form-control col-4"
                    type="text"
                    placeholder="Describe your todo here!"
                    onChange={handleChange}
                    autoFocus
                />
                <button            
                    className="btn btn-outline-success mx-2"
                    type="submit"
                >
                    Add
                </button>
                <button            
                    className="btn btn-danger mx-1"
                    type="button"
                    onClick={deleteAll}
                >
                    Delete All
                </button>
                <button            
                    className="btn btn-info mx-1"
                    type="button"
                    onClick={completeAll}
                >
                    Completed All
                </button>
            </div>
        </form>  
    </header>
    );
};

export default TodoBar;