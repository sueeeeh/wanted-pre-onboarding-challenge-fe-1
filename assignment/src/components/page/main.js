import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Main = () => {
    let navigate = useNavigate();
    //route에서 경로 지정해줘서 페이지 넘어갈 수 있음
    
    useEffect(()=>{
        navigate('/Todo/MainTodo')
    })

    return (
        <>
        </>
    )
}

export default Main;