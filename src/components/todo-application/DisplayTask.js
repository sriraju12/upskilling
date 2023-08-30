import axios from "axios";
import { useEffect, useState } from "react";

function DisplayTask() {

    const [tasks, setTasks] = useState([]);

    function displayTask() {
        axios.get("http://localhost:8081/getalltasks").then(res => setTasks(res.data));
    }

    useEffect(displayTask, []);
    return (
        <div className="table-structure">
            <h1 style={{paddingRight:"250px"}}>Display Task</h1>
            <div className="col-md-10 col-sm-12 col-12">
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>TASKNAME</th>
                        <th>START DATE</th>
                        <th>COMPLETION DATE</th>
                        <th>STATUS</th>
                        
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

                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            </div>

        </div>
    )
}
export default DisplayTask;