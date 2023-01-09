import axios from 'axios';
import React,{ useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Create_Todo = () => {
    const [t,setT] =  useState("");
    const [c,setC] =  useState("");
    let navigate = useNavigate()

    const titleHandler = (ev) => {
        setT(ev.target.value)
    }

    const contentHandler = (ev) => {
        setC(ev.target.value)
    }

    const submitHandler = (ev) => {

        ev.preventDefault();

        axios.post('http://localhost:8080/todos',{
            title : t, 
            content : c
            })
            .then(function (response){
                navigate('/Todo/Main_Todo')
            })

    }
    return (
        <>
            <h1>create_todo</h1>
            <form onSubmit={submitHandler}>
                <input placeholder="email" name='email' value={t} onChange={titleHandler}></input>
                <input placeholder="content" name='content' value={c} onChange={contentHandler}></input>
                <button>create_todo</button>
            </form>
        </>
    )
}

export default Create_Todo;