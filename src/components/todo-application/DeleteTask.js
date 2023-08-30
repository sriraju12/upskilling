import axios from "axios";
import { useState, useEffect } from "react";

function DeleteTask() {

    const [tasks, setTasks] = useState([]);
    function displayTask() {
        axios.get("http://localhost:8081/getalltasks").then(res => setTasks(res.data));
    }
    function deleteTask(id) {
        axios.get("http://localhost:8081/deletebytaskid?id=" + id).then(res => { displayTask() });
        alert("Task is deleted");
    }

    function updateStatus(id, taskName, startDate, completionDate, status) {
        axios.put("http://localhost:8081/edittask?id=" + id + "&taskName=" + taskName + "&startDate=" + startDate + "&completionDate=" + completionDate + "&status=" + status).then(res => { displayTask() });
        alert("Status Updated");
    }
    useEffect(displayTask, []);

    return (
        <div className="table1-structure">
            <h1>Delete Task</h1>
            <div className="container">
                <div className="row">
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>TASKNAME</th>
                                <th>START DATE</th>
                                <th>COMPLETION DATE</th>
                                <th>STATUS</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tasks.map(temp => {
                                    return (
                                        <tr>
                                            <td>{temp.id}</td>
                                            <td>{temp.taskName}</td>
                                            <td>{temp.startDate}</td>
                                            <td>{temp.completionDate}</td>
                                            <td>{temp.status}</td>
                                            <td>
                                                <button type="button" onClick={e => deleteTask(temp.id)} className="btn btn-danger">Delete</button>
                                                <button type="button" onClick={e => updateStatus(temp.id, temp.taskName, temp.startDate, temp.completionDate, "pending")} className="btn btn-warning">Pending</button>
                                                <button type="button" onClick={e => updateStatus(temp.id, temp.taskName, temp.startDate, temp.completionDate, "inprogess")} className="btn btn-info">Inprogress</button>
                                                <button type="button" onClick={e => updateStatus(temp.id, temp.taskName, temp.startDate, temp.completionDate, "completed")} className="btn btn-success">Completed</button>

                                            </td>

                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}
export default DeleteTask;