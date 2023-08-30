import { useState } from "react";
function TaskManager() {
    const [task, setTask] = useState();
    const [storeTask, setStoreTask] = useState([]);

    const addTask = () => {
        setStoreTask([...storeTask, task]);
        setTask('');
    }
    return (
        <div className="task-manager">
            <label>Add Task:</label>
            <input type="text" value={task} onChange={e => setTask(e.target.value)} />
            <button type="button" onClick={addTask}>ADD</button>
            <br></br><br></br><br></br>
            <hr></hr>
            <label id="display">Display Task:</label>
            {
                storeTask.map((task, index) => <li key={index}>{task}</li>)
            }

        </div>
    )
}
export default TaskManager;