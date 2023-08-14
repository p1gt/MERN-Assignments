import Groceries from "./components/Groceries";
import MessageForm from "./components/MessageForm";
import { useState } from "react";
import MessageDisplay from "./components/MessageDisplay";

const App = () => {
    const [ getCurrentMsg, setCurrentMsg ] = useState("no message");
    
    const mailbox = newMsg => setCurrentMsg(newMsg);
    
    return (
        <>
            <Groceries/>
            <MessageForm onNewMessage={ mailbox }/>
            <MessageDisplay message={ getCurrentMsg }/>
        </>
    );
};

export default App;
