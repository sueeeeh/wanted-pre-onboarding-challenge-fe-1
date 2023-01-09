import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from '../components/page/main';
import Login from '../components/page/Login';
import SignUp from '../components/page/SignUp';
import Main_Todo from '../components/page/Todo/Main_Todo';
import Create_Todo from '../components/page/Todo/Create_Todo';


const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Main/>} />
                    <Route path='/auth/Login' element={<Login/>} />
                    <Route path='/auth/SignUp' element={<SignUp/>} />
                    <Route path='/Todo/Main_Todo' element={<Main_Todo/>} />
                    <Route path='/Todo/Create_Todo' element={<Create_Todo/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router;