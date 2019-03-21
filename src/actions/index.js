export default {
  todo: {
    toggle: id => state => {
      const { todos } = state;
      todos[id].done = !todos[id].done;
      return { todos: todos };
    },
    add: () => state => {
      if (state.script.length === 0) return state;
      const { todos } = state;
      todos.push({ done: false, text: state.script });
      return { todos: todos, script: '' };
    },
    del: id => state => {
      if (confirm('Are you sure?')) {
        const { todos } = state;
        todos.splice(id, 1);
        return { todos: todos };
      } else {
        return state;
      }
    },
    changeScript: e => () => ({ script: e.target.value }),
  },
};
