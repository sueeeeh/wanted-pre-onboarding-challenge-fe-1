import axios from "axios";

const TodoAxios = axios.create({
    baseURL : 'http://localhost:8080',
    headers: {
        Authorization : localStorage.getItem('token')
    }
})

export default TodoAxios;
