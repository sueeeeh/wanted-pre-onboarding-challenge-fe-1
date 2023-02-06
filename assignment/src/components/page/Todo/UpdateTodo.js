import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import TodoAxios from "../../../utils/TodoAxios";
import * as S from "../../../style/CreateUpdateStyle"
import HeaderTodo from "../../Global/HeaderTodo";

const UpdateTodo = () => {
    const {state} = useLocation()
    const {id,title,content} = state

    const [updateTitle,setUpdateTitle] = useState(title)
    const [updateContent,setUpdateContent] = useState(content)

    const navigate = useNavigate()

    const OnSubmit = ((e)=>{
        e.preventDefault()

        const check = window.confirm('Are sure want to update?') //확인 confirm
        if(check){
            TodoAxios.put(`/todos/${id}`,{
            title : updateTitle,
            content : updateContent
        })
        .then(()=>{
            navigate('/Todo/MainTodo')
        })
        }


    })

    return(
        <div>
            <S.Global/>
            <HeaderTodo title='Update'/>
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
