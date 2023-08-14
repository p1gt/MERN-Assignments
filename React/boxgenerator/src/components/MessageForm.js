import { useState } from "react";

const MessageForm = props => {
    const [ getMsg, setMsg ] = useState("");
    
    const handleSubmit = e => {
        e.preventDefault();
        props.onNewMessage(getMsg);
    };
    
    return (
        <form onSubmit={ handleSubmit }>
            <h1>Message Form</h1>
            <textarea
                rows={4}
                cols={50}
                placeholder={"Enter your message here..."}
                onChange={ e => setMsg(e.target.value) }
                value={ getMsg }
            />
            <input type="submit" value="Send Message"/>
        </form>
    );
};

export default MessageForm;
