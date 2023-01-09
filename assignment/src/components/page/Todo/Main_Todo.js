import { useNavigate } from "react-router-dom"


const Main_Todo = () => {
    let navigate = useNavigate()
    
    function create_todo(){
        navigate('/Todo/Create_Todo')
    }

    return(
        <>
        <h1>todo main</h1>
        <button onClick={create_todo}>create todo</button>
        </>
    )
}

export default Main_Todo