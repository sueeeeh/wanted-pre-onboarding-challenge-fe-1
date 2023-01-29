import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TodoItem from "./TodoItem";
import styled, { createGlobalStyle } from "styled-components";


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
            <Global/>
            <div>
                <Title>TodoList</Title>
                <AddBtn onClick={Create_Click}>할 일 추가하기</AddBtn>
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

const AddBtn = styled.button`
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

