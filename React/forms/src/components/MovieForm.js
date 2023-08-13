import { useState } from 'react';

const MovieForm = ( ) => {
    const [title, setTitle] = useState("");
    const [titleError, setTitleError] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    const handleTitle = (e) => {
        setTitle(e.target.value);
        if(e.target.value.length < 1) {
            setTitleError("Title is required!");
        } else if(e.target.value.length < 3) {
            setTitleError("Title must be 3 characters or longer!");
        } else {
            setTitleError("");
        }
    }
    
    const createMovie = (e) => {
        e.preventDefault();
        
        const newMovie = { title };
        console.log("Welcome", newMovie);
        setTitle("");
        setIsSubmitted( true );
    };
    
    return (
        <>
            <form onSubmit={ createMovie }>
                {
                    isSubmitted ?
                        <h3>Thank you for submitting the form!</h3> :
                        <h3>Welcome, please submit the form.</h3>
                }
                <div>
                    <label>Title: </label>
                    <input type="text" onChange={ handleTitle } value={title}/>
                    {
                        titleError ?
                            <p>{ titleError }</p> :
                            ''
                    }
                </div>
                {
                    titleError ?
                        <input type="submit" value="Create Movie" disabled /> :
                        <input type="submit" value="Create Movie" />
                }
            </form>
            <div>
                <h3>Movie Form Data</h3>
                <p>Title: { title }</p>
            </div>
        </>
    );
};

export default MovieForm;
