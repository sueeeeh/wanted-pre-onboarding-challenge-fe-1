import axios from 'axios';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import UpdateTodo from './UpdateTodo';
import UpdateImg from '../../../asset/update.png';
import DeleteImg from '../../../asset/delete.png';
import ToggleImg from '../../../asset/Toggle.png';

const TodoItem = ({todo,deleteTodo}) => { //비구조 할당, 한 단계 벗기기
    const {id,content,title} = todo //todo(props).todo로 접근
    const navigate = useNavigate()

    return(
        <>
        <EachTodo>
            <ToggleImgStyle src={ToggleImg} alt='Toggle'/>
            <Detail>
                <Title>{title}</Title>
                <div>{content}</div>
            </Detail>
            <DeleteBtn onClick={()=>deleteTodo(id)}><Icon src={DeleteImg} alt='deleteicon'/></DeleteBtn>
            <UpdateBtn onClick={()=>navigate('/Todo/UpdateTodo',{state:todo})}><Icon src={UpdateImg} alt='updateicon'/></UpdateBtn>
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
    margin-left: 45rem;
    align-items: center;
`

const Detail = styled.div`
    color: white;
    margin-right: 3rem;
`
 
const DeleteBtn = styled.button`
    background-color: black;
`
const UpdateBtn = styled.button`
    background-color: black;
`

const Icon = styled.img`
    width: 3rem;
    height: 3rem;
    margin-left: 0.5rem;
`

const ToggleImgStyle = styled.img`
    width: 3rem;
    height: 3rem;
    margin-right: 1rem;
`