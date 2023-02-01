import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HeaderTodo = () => {
    const navigate = useNavigate()

    return(
        <Header>
            <Title>te</Title>
            <AuthBtn onClick={()=>navigate('/auth/Login')}>login</AuthBtn>
            <AuthBtn onClick={()=>navigate('/auth/SignUp')}>sign up</AuthBtn>
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
    
    /* margin-top: 3rem;
    margin-bottom: 3rem;
    margin-right: 40rem; */
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
`