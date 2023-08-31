import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

const  Create = () => {
    const [ store, setStore ] = useState({});
    const [ errors, setErrors ] = useState({});
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8000/api/store", store)
            .then(res => {
                navigate(`/${res.data._id}`);
            })
            .catch(err => {
                setErrors(err.response.data.errors);
            });
    };

    return (
        <>
            <Link to={'/'}>go home</Link>
            <h3>add a store</h3>
            <form onSubmit={ submitHandler }>
                <div>
                    <label>Store Name: </label>
                    <input type="text" onChange={ (e) => setStore({ ...store, name: e.target.value }) } />
                    {
                        errors.name?
                        <p>{ errors.name.message }</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Store Number: </label>
                    <input type="text" onChange={ (e) => setStore({ ...store, number: e.target.value }) } />
                    {
                        errors.number?
                        <p>{ errors.number.message }</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Open: </label>
                    <input type="checkbox" onChange={ (e) => setStore({ ...store, open: e.target.checked }) } />
                </div>
                <button type={"submit"} >Submit</button>
            </form>
        </>
    );
};

export default Create;
