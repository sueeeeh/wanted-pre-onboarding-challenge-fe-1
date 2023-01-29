import { useNavigate } from 'react-router-dom';

const Main = () => {
    let navigate = useNavigate();
    //route에서 경로 지정해줘서 페이지 넘어갈 수 있음
    function login() {
        navigate('/auth/Login');
    }
    function signup() {
        navigate('/auth/SignUp');
    }
    function maintodo() {
        navigate('/Todo/MainTodo');
    }

    return (
        <>
            <h1>hi this is main page</h1>
            <button id="Login" onClick={login}>Login</button>
            <button id="SignUp" onClick={signup}>SignUp</button>
            <button id="MainTodo" onClick={maintodo}>Todo(main)</button>
        </>
    )
}

export default Main;