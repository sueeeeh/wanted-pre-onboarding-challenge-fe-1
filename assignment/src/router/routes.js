import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from '../components/page/main';
import Login from '../components/page/Login';
import SignUp from '../components/page/SignUp';
import MainTodo from '../components/page/Todo/MainTodo';
import CreateTodo from '../components/page/Todo/CreateTodo';


const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Main/>} />
                    <Route path='/auth/Login' element={<Login/>} />
                    <Route path='/auth/SignUp' element={<SignUp/>} />
                    <Route path='/Todo/MainTodo' element={<MainTodo/>} />
                    <Route path='/Todo/CreateTodo' element={<CreateTodo/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router;