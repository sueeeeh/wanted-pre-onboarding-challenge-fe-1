import axios from 'axios';
import { useCallback, useState } from 'react';
import S from 'styled-components';

const TodoItem = (todo,{forceUpdate}) => {
    const {id,content,title} = todo.todo //왜 todo.todo로 접근이 되는지 모르겠다..

    const deleteTodo = (() => {
        axios.delete(`http://localhost:8080/todos/${id}`,{
            headers: {
                Authorization : localStorage.getItem('Token')
            }
        })
    })

    return(
        <div className="todo_each">
            <h5>{title}</h5>
            <div>{content}</div>
            <button onClick={deleteTodo}>삭제</button>
            <hr/>
        </div>
    )
}

export default TodoItem;    

 