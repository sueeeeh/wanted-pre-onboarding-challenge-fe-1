import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TodoItem from "./TodoItem";
import styled, { createGlobalStyle } from "styled-components";
import TodoAxios from "../../../utils/TodoAxios";


const MainTodo = () => {
    const navigate = useNavigate()

    const [Todos,setTodos] = useState([])

    const Create_Click = () => {
        navigate('/Todo/CreateTodo')
    }

    const DeleteAll_Click = () => {
        Todos?.map(todo=>(
            TodoAxios.delete(`/todos/${todo.id}`)
        ))
        setTodos([])
    }

    const deleteTodo = (id) => {
        TodoAxios.delete(`/todos/${id}`)
        .then(()=>{
            setTodos((prev)=>prev.filter((todo)=>todo.id !== id))
        })
    }

    useEffect(() => {
        TodoAxios.get('/todos')
        .then((res,req)=>{
            setTodos(res.data.data)
        })
        .catch((err)=>{
            console.error(err);
        })
    },[])

    return (
        <>
            <Global/>
            <div>
                <Title>TodoList</Title>
                <BigBtn onClick={Create_Click}>할 일 추가하기</BigBtn>
                <BigBtn onClick={DeleteAll_Click}>모두 삭제하기</BigBtn>
                {
                    Todos?.map(todo=>(
                        <TodoItem todo={todo} setTodos={setTodos} key={todo.id} deleteTodo={deleteTodo}></TodoItem>
                    ))
                }       
            </div>
        </>
    )
}

export default MainTodo;

const Global = createGlobalStyle`
    body {
        width: 100%;
        height: 100%;
        background-color: black;
    }
`

const Title = styled.div`
    font-size: 6rem;
    color: white;
    display: flex;
    justify-content: center;
`

const BigBtn = styled.button`
    margin: auto;
    display: flex;
    width: 75rem;
    height: 6.5rem;
    background-color: white;
    border: none;
    margin-top: 3rem;
    margin-bottom: 3rem;

    justify-content: center;
    align-items: center;
    font-size: 3rem;
`

