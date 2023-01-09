import axios from 'axios';
import React,{ useState } from 'react';
import { useNavigate } from 'react-router-dom';


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
            <h1>Signup</h1>
            <form onSubmit={submitHandler}>
                <input placeholder="email" name='email' value={e} onChange={emailHandler}></input>
                <input placeholder="password" name='password' value={p} onChange={passwordHandler}></input>
                <button>SignUp</button>
            </form>
        </>
    )
}

export default SignUp;