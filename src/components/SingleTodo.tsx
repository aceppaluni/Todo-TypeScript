import React, {useState} from 'react'
import { Todo } from '../model';


interface Props {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const SingleTodo: React.FC<Props> = ({todo, todos, setTodos}: Props) => {

    const [edit, setEdit] = useState<boolean>(false)
    const [editTodo, setEditTodo] = useState<string>(todo.todo)

    const handleDone = (id: number) => {
        setTodos(
          todos.map((todo) =>
            todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
          )
        );
    };

    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }
 
    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        setTodos(
          todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
        );
        setEdit(false);
    };

  return (
    <form className='todosSingle' onSubmit={(e) => handleEdit(e, todo.id)}>
        { edit ? (
            <input
              value={editTodo}
              onChange={(e) => setEditTodo(e.target.value)}
              className="todosSingleText"
            />
        ) : todo.isDone ? (
            <s>{todo.todo}</s>
        ) : (
            <span className='todosSingleText'>{todo.todo}</span>
        )}
        <div className='test'>
            <span className='icon'>
                <i onClick={() => handleDelete(todo.id)} className='test'>Del</i>
            </span>
            <span className='icon'>
                <i onClick={() => setEdit(!edit)} className='test'>Edit</i>
            </span>
            <span className='icon'>
                <i onClick={() => handleDone(todo.id)} className='test'>D</i>
            </span>
        </div>
    </form>
  )
}

export default SingleTodo
