import { useEffect, useState } from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

const List = () => {
    const [ stores, setStores ] = useState([]);
    const [ loaded, setLoaded ] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/store")
            .then(res => {
                setStores(res.data);
                setLoaded(true);
            })
            .catch(err => console.log(err));
    }, [ stores ]);

    const remove = (id) => {
        axios.delete(`http://localhost:8000/api/store/${id}`)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };

    return (
        <>
            <h3>find stores in your area</h3>
            <table>
                <thead>
                    <tr>
                        <th>Store Name</th>
                        <th>Store number</th>
                        <th>Open</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                {loaded && stores.map((store, i) => {
                    return (
                        <tr key={i}>
                            <td><Link to={`/${store._id}`}>{store.name}</Link></td>
                            <td>{store.number}</td>
                            {
                                store.open?
                                <td>Open</td> :
                                <td>Closed</td>
                            }
                            {
                                store.open?
                                <button onClick={ () => remove(store._id) }>Delete</button> :
                                <></>
                            }
                        </tr>
                    );
                })}
                </tbody>
            </table>
            <button onClick={ () => navigate('/add') }>cant find your store?</button>
        </>
    );
};

export default List;
