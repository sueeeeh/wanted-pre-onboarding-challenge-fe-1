import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HeaderTodo = ({title}) => {
    const navigate = useNavigate()
    const [isLogin,setIsLogin] = useState(false)

    useEffect(()=>{
        if(localStorage.getItem('token')){
            setIsLogin(true)
        }
        if(!isLogin){
            navigate('/')
        }
    },[])

    const logout = () => {
        localStorage.removeItem('token')
    }

    return(
        <Header>
            <Title>{title}</Title>
            {!isLogin && 
            <>
                <AuthBtn onClick={()=>navigate('/auth/Login')}>login</AuthBtn>
                <AuthBtn onClick={()=>navigate('/auth/SignUp')}>sign up</AuthBtn>
            </>}
            {isLogin && <AuthBtn onClick={logout}>logout</AuthBtn>}
        </Header>
    )
}

export default HeaderTodo;

const Title = styled.div`
    font-size: 6rem;
    color: white;
    display: flex;
    justify-content: center;

    position: absolute;
    left: 50%; //가장 앞 글자가 중간에 위치 , (display,justify-content 없을 때) left가 먼저 먹어서 right는 무시 / (있을 때) left,right 둘 다 먹는다 ????
    right: 50%; //가장 뒷 글자가 중간에 위치
`

const AuthBtn = styled.button`
    height: 4rem;
    width: 7rem;
    background-color: white;
    margin-right: 2rem;

    font-size: 1.5rem;
`

const Header = styled.header`
    display: flex;
    justify-content: end;
    align-items: center;
    padding-top: 3rem;
    padding-bottom: 3rem;
    margin-bottom: 2rem;
`