import {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";

const Show = () => {
    const [ store, setStore ] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/store/${id}`)
            .then(res => {
                setStore(res.data);
            })
            .catch(err => console.log(err));
    }, [ store ]);

    return (
        <>
            <Link to={'/'}>go home</Link>
            <h2>{ store.name }</h2>
            <p>number: { store.number }</p>
            <p>{
                store.open?
                    <span>open</span>:
                    <span>closed</span>
            }</p>
            <button onClick={() => navigate(`/edit/${id}`)}>edit</button>
        </>
    );
};

export default Show;
