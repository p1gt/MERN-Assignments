import useList from "../hooks/useList";

const TodoList = () => {
    const [ tasks, setTasks, { add, remove } ] = useList();
    const [ count, setCount ] = useList(0);
    const [ title, setTitle ] = useList("");
    
    const handleSubmit = event => {
        event.preventDefault();
        add({id: count, title: title, completed: false});
        setCount(count + 1);
        console.log(tasks)
        setTitle("");
    };
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type={"text"} placeholder={"title"} onChange={e => setTitle(e.target.value)}/>
                <input type={"submit"} value={"Add"}/>
            </form>
            {
                tasks.map(task => (
                    <div key={task.id}>
                        <span style={{textDecoration: task.completed?"line-through":"none"}}>{task.title}</span>
                        <input
                            type={"checkbox"}
                            onClick={() => {
                                setTasks(tasks.map(t => {
                                    if (t.id === task.id) {
                                        t.completed = !t.completed;
                                    }
                                    return t;
                                }));
                            }
                        }/>
                        <button onClick={() => remove(task.id)}>X</button>
                    </div>
                ))
            }
        </>
    );
};

export default TodoList;
