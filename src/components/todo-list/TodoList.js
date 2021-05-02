import "./TodoList.css";

const TodoList = (props) => {
  console.log(props.dataTodos);
  return (
    <ul>
      {props.dataTodos.map((todo) => {
        // {id: 1, title: 'eat'}
        return <li key={todo.id}>{todo.title}</li>;
      })}
    </ul>
  );
};

export default TodoList;
