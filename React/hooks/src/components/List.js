import { useState } from "react";
import useList from "../hooks/useList";

const List = () => {
    const [ val, setVal ] = useState("");
    const [ list, { add } ] = useList([]);

    const handleSubmit = e => {
        e.preventDefault();
        add(val);
        setVal("");
    };

    return (
        <>
            {list.map((item, index) => <p key={index}>{item}</p>)}
            <input
                type="text"
                value={val}
                onChange={e => setVal(e.target.value)}
            />
            <button onClick={handleSubmit}>Add</button>
        </>
    );
};

export default List;
