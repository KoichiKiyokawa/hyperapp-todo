import { h } from 'hyperapp';

export default (state, actions) => (
  <div>
    <div>
      <input
        type="text"
        onchange={actions.todo.changeScript}
        value={state.todo.script}
      />
      <button onclick={actions.todo.add}>add</button>
    </div>
    {state.todo.todos.map((todo, index) => (
      <div>
        <span style={{ marginRight: '5px' }}>
          <input type="checkbox" onchange={() => actions.todo.toggle(index)} />
          {todo.done ? (
            <span>
              <del>{todo.text}</del>
            </span>
          ) : (
            <span>{todo.text}</span>
          )}
        </span>
        <button onclick={() => actions.todo.del(index)}>delete</button>
      </div>
    ))}
  </div>
  // TODO: hyperappで親子関係をどう作るか要調査
  // <div>
  //   <TodoWriter />
  //   <TodoList />
  // </div>
);
