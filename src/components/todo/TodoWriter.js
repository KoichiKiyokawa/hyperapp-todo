import { h } from 'hyper-app';

const TodoWriter = (state, actions) => (
  <div>
    <input type="text" onChange={actions.changeScript} value={state.script} />
    <button onClick={actions.add}>add</button>
  </div>
);

export default TodoWriter;
