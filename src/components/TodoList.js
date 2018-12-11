import React, { Component } from 'react';

class TodoList extends Component {
  render() {
    return (
      <div className="todo-list">
        <header className="todo-list-header">
          <form>
            <input type="text"/>
            <button>Add task</button>
          </form>
        </header>
      </div>
    )
  }
}

export default TodoList;
