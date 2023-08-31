import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

const Update = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [ store, setStore ] = useState({});
    const [ errors, setErrors ] = useState({});
    const [ loaded, setLoaded ] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/store/${id}`)
            .then(res => {
                setStore(res.data);
                setLoaded(true);
            })
            .catch(err => console.log(err));
    }, [ id ]);

    const updateStore = (e) => {
        e.preventDefault();
        axios.patch(`http://localhost:8000/api/store/${id}`, store)
            .then(res => {
                navigate(`/${res.data._id}`);
            })
            .catch(err => {
                setErrors(err.response.data.errors);
            });
    };

    return (
        <>
            <p>edit this store</p>
            <Link to={'/'}>go home</Link>
            {loaded && (
                <form onSubmit={updateStore}>
                    <div>
                        <label>Name: </label>
                        <input type="text" name="name" id="name" value={store.name} onChange={e => setStore({...store, name: e.target.value})} />
                        {errors.name && (
                            <span>{errors.name.message}</span>
                        )}
                    </div>
                    <div>
                        <label>number:
                            <input type="number" name="number" id="number" value={store.number} onChange={e => setStore({...store, number: e.target.value})} />
                        </label>
                        {errors.number && (
                            <span>{errors.number.message}</span>
                        )}
                    </div>
                    <div>
                        <label>Open: </label>
                        <input type="checkbox" onChange={e => setStore({...store, open: e.target.checked})} checked={store.open} />
                        {errors.open && (
                            <span>{errors.open.message}</span>
                        )}
                    </div>
                    <button onClick={() => updateStore}>update</button>
                </form>
            )}
        </>
    );
};

export default Update;