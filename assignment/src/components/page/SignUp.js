import axios from 'axios';
import React,{ useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from '../../style/LoginSigninStyle';

const SignUp = () => {
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
        ev.preventDefault();

        const password_regex = /^.{8,}$/
        const email_regex = /^.*@[a-z0-9-]*.[a-z0-9]*$/

        if(password_regex.test(p) && email_regex.test(e)){
            axios.post('http://localhost:8080/users/create',{
                email : e, 
                password : p
                })
                .then(function (response){
                    navigate('/auth/Login')
                    alert('회원가입이 완료되었습니다.')
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
            <S.Title>Sign Up</S.Title>
            <form onSubmit={submitHandler}>
                <S.Input placeholder="email" name='email' value={e} onChange={emailHandler}/>
                <S.Input placeholder="password" name='password' value={p} onChange={passwordHandler}/>
                <S.Padding/>
                <S.BottomBtn type="submit">Sign Up</S.BottomBtn>
            </form>
            <S.BottomBtn onClick={()=>{navigate('/Todo/MainTodo')}}>Back</S.BottomBtn>
        </>
    )
}

export default SignUp;