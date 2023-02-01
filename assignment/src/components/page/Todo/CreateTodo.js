import TodoAxios from "../../../utils/TodoAxios"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../../../style/CreateUpdateStyle"
import HeaderTodo from "../../Global/HeaderTodo";


const CreateTodo = () => {
    const [title,setTitle] = useState('')
    const [content,setContent] = useState('')
    const navigate = useNavigate()

    const ChangeTitle = (e) => {
        setTitle(e.target.value)
    }

    const ChangeContent = (e) => {
        setContent(e.target.value)
    }

    const OnSubmit = (e) => {
        e.preventDefault()

        TodoAxios.post('/todos',{
            title,content
        })
        .then((res,req)=>{
            navigate('/Todo/MainTodo')
        })
        .catch((err)=>{
            console.error(err);
        })
    }

    return(
        <div>
            <S.Global/>
            <HeaderTodo title='Create'/>
            <form onSubmit={OnSubmit}>
                <S.Input name="title" placeholder="Enter Title" value={title} onChange={ChangeTitle}/>
                <S.Input name="content" placeholder="Enter Content" value={content} onChange={ChangeContent}/>
                <S.Padding/>
                <S.BottomBtn type="submit">Save</S.BottomBtn>
            </form>
            <S.BottomBtn onClick={()=>{navigate('/Todo/MainTodo')}}>Back</S.BottomBtn>
        </div>
    )
}

export default CreateTodo;