import Groceries from "./components/Groceries";
import MessageForm from "./components/MessageForm";
import { useState } from "react";
import MessageDisplay from "./components/MessageDisplay";
import BoxForm from "./components/BoxForm";
import "./App.css"
import Box from "./components/Box";

const App = () => {
    const [ getCurrentMsg, setCurrentMsg ] = useState("no message");
    const [ boxes, setBoxes ] = useState([]);
    const onNewMessage  = newMsg => setCurrentMsg(newMsg);
    const addBox = box => setBoxes([...boxes, box]);
    
    return (
        <>
            <BoxForm onNewBox={ addBox }/>
            {
                boxes.map((box, i) => <Box key={ i } color={ box.color }/>)
            }
            <Groceries/>
            <MessageForm onNewMessage={ onNewMessage  }/>
            <MessageDisplay message={ getCurrentMsg }/>
        </>
    );
};

export default App;
