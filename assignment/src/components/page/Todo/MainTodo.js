import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TodoItem from "./TodoItem";


const MainTodo = () => {
    const navigate = useNavigate()

    const [Todo,setTodo] = useState([])

    const Create_Click = () => {
        navigate('/Todo/CreateTodo')
    }

    // const [,updateState] = useState();
    // const forceUpdate = useCallback(()=>updateState({}))

    useEffect(() => {
        axios.get('http://localhost:8080/todos',{
            headers: {
                Authorization : localStorage.getItem('Token')
            }
        })
        .then((res,req)=>{
            setTodo(res.data.data)
        })
        .catch((err)=>{
            console.error(err);
        })
    },[])

    return (
        <>
            <div>
                <h1>TodoList</h1>
                <button onClick={Create_Click}>추가</button>
                {
                    Todo?.map(todo=>(
                        <TodoItem todo={todo} key={todo.id}></TodoItem>
                    ))
                }
            </div>
        </>
    )
}

export default MainTodo;