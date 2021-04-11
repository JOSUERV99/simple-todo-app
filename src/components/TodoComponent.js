import React from 'react';

const TodoComponent = ({deleteTodo, completeTodo, todoItem}) => (
    <div className="card my-3" key={todoItem.id} value={todoItem}>
        <div className="card-header">
            { todoItem.title.replace(/^\w/, c => c.toUpperCase()) }
        </div>
        <div className="card-footer">
            <button type="button" className={!todoItem.completed ? "btn btn-warning mx-2" : "btn btn-info mx-2"} onClick={completeTodo} value={JSON.stringify(todoItem)}>
                {!todoItem.completed ? 
                    <span><i className="fa fa-minus-circle" aria-hidden="true"></i>Missing</span> : 
                    <span><i className="fa fa-check" aria-hidden="true"></i>Done</span>
                }
            </button>
            <button className="btn btn-danger mx-2" type="button" onClick={deleteTodo} value={JSON.stringify(todoItem)}>
                <i className="fa fa-trash" aria-hidden="true"></i> Delete
            </button>
        </div>
    </div>
);

export default TodoComponent;