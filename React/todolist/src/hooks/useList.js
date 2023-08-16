import { useState } from "react";

const useList = (initialList = []) => {
    const [ list, setList ] = useState(initialList);

    const add = e => setList([...list, e]);

    const remove = i => setList([...list.slice(0, i), ...list.slice(i+1)]);

    const clear = () => setList([]);

    return [ list, setList, { add, remove, clear } ];
};

export default useList;
