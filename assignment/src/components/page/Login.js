import axios from 'axios';
import React,{ useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from '../../style/LoginSigninStyle';

const Login = () => {
    const [e,sete] =  useState("");
    const [p,setp] =  useState("");
    let navigate = useNavigate()

    const emailHandler = (ev) => {
        sete(ev.target.value)
    }

    const passwordHandler = (ev) => {
        setp(ev.target.value)
    }

    const submitHandler = (ev) => {
        if(localStorage.getItem('token')){
            navigate('/')
            alert('이미 토큰이 존재합니다.')
        }
        ev.preventDefault();

        const password_regex = /^.{8,}$/
        const email_regex = /^.*@[a-z0-9-]*.[a-z0-9]*$/

        if(password_regex.test(p) && email_regex.test(e)){
            axios.post('http://localhost:8080/users/login',{
                email : e, 
                password : p
                })
                .then(function (response){
                    localStorage.setItem('token',response.data.token)
                    navigate('/')
                    alert('로그인 되었습니다.')
                })
        }
        if(!password_regex.test(p)) {
            alert('비밀번호를 8자 이상 입력해주세요.')
        }
        else if(!email_regex.test(e)) {
            alert('이메일에 "@", "."를 포함해주세요.')
        }
    }
    return (
        <>
            <S.Global/>
            <S.Title>Login</S.Title>
            <form onSubmit={submitHandler}>
                <S.Input placeholder="Enter Email" name='email' value={e} onChange={emailHandler}/>
                <S.Input placeholder="Enter Password" name='password' value={p} onChange={passwordHandler}/>
                <S.Padding/>
                <S.BottomBtn type="submit">Login</S.BottomBtn>
            </form>
            <S.BottomBtn onClick={()=>{navigate('/Todo/MainTodo')}}>Back</S.BottomBtn>
        </>
    )
    
}

export default Login;