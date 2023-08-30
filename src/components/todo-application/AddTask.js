import { useState } from "react";
import axios from 'axios';

function AddTask() {
    const [taskName, setTaskname] = useState();
    const [startDate, setStartDate] = useState();
    const [completionDate, setCompletionDate] = useState();
    const [status, setStatus] = useState();
    function addTask() {

        axios.post("http://localhost:8081/addtask?taskName=" + taskName + "&startDate=" + startDate + "&completionDate=" + completionDate + "&status=" + status);
        alert("task added");
    }
    return (
        <div className="table-design">
            <h1 style={{ paddingRight: "380px" }}>Add Task</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12 col-12">
                        <form>
                            <div className="form-floating mb-3">
                                <input type="text" class="form-control" value={taskName} onChange={e => setTaskname(e.target.value)} id="floatingInput" placeholder="Task Name" required />
                                <label for="floatingInput">Task Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="date" class="form-control" value={startDate} onChange={e => setStartDate(e.target.value)} id="floatingstartDate" placeholder="startDate" required />
                                <label for="floatingstartDate">Start Date</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="date" class="form-control" id="floatingcompletionDate" value={completionDate} onChange={e => setCompletionDate(e.target.value)} placeholder="completionDate" required />
                                <label for="floatingcompletionDate">Completion Date</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" class="form-control" value={status} onChange={e => setStatus(e.target.value)} id="floatingstatus" placeholder="status" required />
                                <label for="floatingstatus">Status</label>
                            </div>
                            <div className="form-group mb-3">
                                <button type="submit" onClick={addTask} className="btn btn-primary">ADD TASK</button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AddTask;