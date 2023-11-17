import React, { useRef } from 'react'

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({todo, setTodo, handleAdd}) => {

    const inputRef = useRef<HTMLInputElement>(null)
  return (
    <form className='input' onSubmit={(e) => {
        handleAdd(e)
        inputRef.current?.blur();
    }}>
        <input
            ref={inputRef}
            type='input' 
            placeholder='Enter task' 
            className='inputBox'
            value={todo}
            onChange={(e) => setTodo(e.target.value)}></input>
        <button className='goBtn' type='submit'>GO</button>
    </form>
  )
}

export default InputField
