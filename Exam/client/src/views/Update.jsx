import {useNavigate, useParams} from "react-router-dom";
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

    const updateStore = e => {
        e.preventDefault();
        axios.patch(`http://localhost:8000/api/store/${id}`, store)
            .then(() => {
                navigate(`/store/${id}`);
            })
            .catch(err => {
                console.log(err.response);
                setErrors(err.response.data.errors);
            });
    }

    return (
        <>
            <p>edit this store</p>
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
                        <input type="checkbox" name="open" id="open" value={store.open} onChange={e => setStore({...store, open: e.target.value})} />
                        {errors.open && (
                            <span>{errors.open.message}</span>
                        )}
                    </div>
                    <button onClick={() => updateStore(store._id)}>update</button>
                </form>
            )}
        </>
    );
};

export default Update;