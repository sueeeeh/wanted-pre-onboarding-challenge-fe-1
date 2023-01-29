import TodoAxios from "../../../utils/TodoAxios"
import { useState } from "react";
import { useNavigate } from "react-router-dom";


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
            <h1>Create Todo</h1>
            <form onSubmit={OnSubmit}>
                <input name="title" placeholder="title" value={title} onChange={ChangeTitle}/>
                <input name="content" placeholder="content" value={content} onChange={ChangeContent}/>
                <button type="submit">submit button</button>
            </form>
            <button onClick={()=>{navigate('/Todo/MainTodo')}}>MainTodo</button>
        </div>
    )
}

export default CreateTodo;