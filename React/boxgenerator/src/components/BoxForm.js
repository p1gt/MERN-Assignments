const BoxForm = props => {
    const addBox = e => {
        e.preventDefault();
        const newBox = {
            color: e.target[0].value
        };
        props.onNewBox(newBox);
    };
    
    return (
        <>
            <form onSubmit={ addBox }>
                <label>Color: </label>
                <input type="color"/>
                <input type="submit" value="Add"/>
            </form>
        </>
    );
};

export default BoxForm;
