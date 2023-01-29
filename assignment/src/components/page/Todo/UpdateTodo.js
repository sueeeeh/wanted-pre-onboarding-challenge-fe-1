import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TodoAxios from "../../../utils/TodoAxios";

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
            <h1>UpdateTodo</h1>
            <form onSubmit={OnSubmit}>
                <input value={updateTitle} onChange={(e)=>setUpdateTitle(e.target.value)}></input>
                <input value={updateContent} onChange={(e)=>setUpdateContent(e.target.value)}></input>
                <button type="submit">저장</button>
            </form>
            <button onClick={()=>navigate('/Todo/MainTodo')}>메인으로 돌아가기</button>
        </div>
    )
}

export default UpdateTodo;