import Todo from "../Todo";

const TodoList = () => {
  return (
    <div className="todo-list">
      <Todo todo="Clean up the bathroom" />
      <Todo todo="Buy some milk" />
      <Todo todo="Jog" />
      <Todo todo="Learn React" />
      <Todo todo="Do exercises" />
    </div>
  );
};
export default TodoList;