import axios from 'axios';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import UpdateTodo from './UpdateTodo';
import UpdateImg from '../../../asset/update.png';
import DeleteImg from '../../../asset/delete.png';

const TodoItem = (todo) => {
    const {id,content,title} = todo.todo //왜 todo.todo로 접근이 되는지 모르겠다..
    const navigate = useNavigate()

    const deleteTodo = (() => {
        axios.delete(`http://localhost:8080/todos/${id}`,{
            headers: {
                Authorization : localStorage.getItem('Token')
            }
        })
    })

    return(
        <>
        <EachTodo>
            <Detail>
                <Title>{title}</Title>
                <div>{content}</div>
            </Detail>
            <DeleteBtn onClick={deleteTodo}><img src={DeleteImg} alt='deleteicon'/></DeleteBtn>
            <UpdateBtn onClick={()=>navigate('/Todo/UpdateTodo',{state:todo})}><img src={UpdateImg} alt='updateicon'/></UpdateBtn>
        </EachTodo>        
        <hr/>
        
        </>

    )
}

export default TodoItem;    

const Title = styled.div`
    font-size: 3rem;
    color: white;
`

const EachTodo = styled.div`
    display: flex;

`

const Detail = styled.div`
    color: white;
`
 
const DeleteBtn = styled.button`
    background-color: black;
    width: 100px;
    height: 100px;
`

const UpdateBtn = styled.button`
    background-color: black;
`