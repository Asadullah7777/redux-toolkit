import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from './redux/slice/todo';


const Fetchtodo = () => {
    const dispatch = useDispatch();
    const fetch = useSelector((state) => state);
    console.log("FetchData", fetch);
    if (fetch.todo.isLoading) {
        return <h1>Loading....</h1>;
    }

    return (
        <div>
            <button onClick={(e) => dispatch(fetchTodos())} >Fetch Todos</button>
            {
                fetch.todo.data && fetch.todo.data.map((e) => <li>{e.title}</li>)
            }
        </div>
    )
}

export default Fetchtodo