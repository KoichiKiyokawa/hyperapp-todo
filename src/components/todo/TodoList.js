import { h } from 'hyper-app';

const TodoList = (state, actions) =>
  state.todo.todos.map(todo => (
    <div>
      <input type="checkbox" onChange={actions.toggle} />
      {todo.done ? (
        <span>
          <del>{todo.text}</del>
        </span>
      ) : (
        <span>{todo.text}</span>
      )}
    </div>
  ));

export default TodoList;
