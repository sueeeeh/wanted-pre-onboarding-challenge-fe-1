import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import TodoAxios from "../../../utils/TodoAxios";
import * as S from "../../../style/CreateUpdateStyle"

const UpdateTodo = () => {
    const {state} = useLocation()
    const {id,title,content} = state

    const [updateTitle,setUpdateTitle] = useState(title)
    const [updateContent,setUpdateContent] = useState(content)

    const navigate = useNavigate()

    const OnSubmit = ((e)=>{
        e.preventDefault()

        TodoAxios.put(`/todos/${id}`,{
            title : updateTitle,
            content : updateContent
        })
        .then(()=>{
            navigate('/Todo/MainTodo')
        })
    })

    return(
        <div>
            <S.Global/>
            <S.Header>
                    <S.Title>Update</S.Title>
                    <S.AuthBtn onClick={()=>navigate('/auth/Login')}>login</S.AuthBtn>
                    <S.AuthBtn onClick={()=>navigate('/auth/SignUp')}>sign up</S.AuthBtn>
            </S.Header>
            <form onSubmit={OnSubmit}>
                <S.Input value={updateTitle} onChange={(e)=>setUpdateTitle(e.target.value)}/>
                <S.Input value={updateContent} onChange={(e)=>setUpdateContent(e.target.value)}/>
                <S.BottomBtn type="submit">Save</S.BottomBtn>
            </form>
            <S.BottomBtn onClick={()=>navigate('/Todo/MainTodo')}>Back</S.BottomBtn>
        </div>
    )
}

export default UpdateTodo;
