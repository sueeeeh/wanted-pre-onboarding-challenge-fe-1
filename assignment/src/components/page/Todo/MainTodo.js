import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TodoItem from "./TodoItem";
import styled, { createGlobalStyle } from "styled-components";
import TodoAxios from "../../../utils/TodoAxios";
import HeaderTodo from "../../Global/HeaderTodo";

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
        const check = window.confirm('Are sure want to delete?')
        if(check){
            TodoAxios.delete(`/todos/${id}`)
            .then(()=>{
                setTodos((prev)=>prev.filter((todo)=>todo.id !== id))
            })  
        }
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
                <HeaderTodo title='TodoList'/>

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

const BigBtn = styled.button`
    margin: auto;
    display: flex;
    width: 70rem;
    height: 3rem;
    background-color: white;
    border: none;
    margin-bottom: 2rem;

    justify-content: center;
    align-items: center;
    font-size: 2rem;
`


