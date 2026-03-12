const Todoitem = ({ data, index, deleteTodo, editTodo }) => {
  return (
    <li>
      {data}

      <button onClick={() => editTodo(index)}>Edit</button>

      <button onClick={() => deleteTodo(index)}>Delete</button>
    </li>
  );
};

export default Todoitem;
