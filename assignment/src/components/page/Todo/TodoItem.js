import axios from 'axios';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import UpdateTodo from './UpdateTodo';
import UpdateImg from '../../../asset/update.png';
import DeleteImg from '../../../asset/delete.png';
import ToggleImg from '../../../asset/Toggle.png';
// import OpenToggleImg from '../../../asset/openToggle.png';

const TodoItem = ({todo,deleteTodo}) => { //비구조 할당, 한 단계 벗기기
    const {id,content,title} = todo //todo(props).todo로 접근
    const navigate = useNavigate()
    
    const [Toggle,setToggle] = useState(false)

    return(
        <>
        <EachTodo>
            <Detail>
                <ToggleTitle>
                    <ToggleImgStyle src={ToggleImg} alt='Toggle' onClick={()=>setToggle(!Toggle)} Toggle={Toggle}/>
                    <Title>{title}</Title>
                </ToggleTitle>
                {Toggle && <Content>{content}</Content>}
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
    justify-content: center;
`

const Detail = styled.div`
    color: white;
    margin-right: 3rem;
`

const ToggleTitle = styled.div`
    display: flex;
    align-items: center;
`

const Content = styled.div`
    padding-left: 4rem;
    margin-bottom: 0.5rem;
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
    transform: rotate(${(props)=>(!props.Toggle ? "0deg" : "-150deg")});
`