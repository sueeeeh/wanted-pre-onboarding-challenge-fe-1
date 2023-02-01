import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

const Main = () => {
    let navigate = useNavigate();
    //route에서 경로 지정해줘서 페이지 넘어갈 수 있음
    
    const [isLogin,setIsLogin] = useState(false)

    useEffect(()=>{
        if(localStorage.getItem('Token')){
            navigate('/Todo/MainTodo')
        }
    })

    return (
        <>
            <Global/>
            <Title>Please Login / Sign Up</Title>
            <SubTitle>Let’s make your own Todo-List</SubTitle>

            <Btns>
                <LoginBtn onClick={()=>navigate('/auth/Login')}>Login</LoginBtn>
                <SignupBtn onClick={()=>navigate('/auth/SignUp')}>Sign Up</SignupBtn>
            </Btns>
        </>
    )
}

export default Main;

const Global = createGlobalStyle`
    body {
        width: 100%;
        height: 100%;
        background-color: black;
    }
`


const Title = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 12rem;

    color: #FEFFFF;
    font-size: 5rem;
    font-weight: 300;
`

const SubTitle = styled.div`
    display: flex;
    justify-content: center;

    color: #FEFFFF;
    font-size: 3rem;
    font-weight: 300;
`

const LoginBtn = styled.button`
    background-color: #FEFFFF;
    width: 20rem;
    height: 10rem;
    margin-right: 8rem;

    font-size: 2.5rem;
    font-weight: 100; // 얘 왜 안 먹지??
`

const SignupBtn = styled.button`
    background-color: #FEFFFF;
    width: 20rem;
    height: 10rem;

    font-size: 2.5rem;
    font-weight: 100; // 얘 왜 안 먹지??
`

const Btns = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 11.5rem;

`
