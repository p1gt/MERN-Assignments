const MessageDisplay = props => {
    return (
        <>
            <h2>Current Message</h2>
            <p>{props.message}</p>
        </>
    );
};

export default MessageDisplay;
