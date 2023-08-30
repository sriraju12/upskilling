import { useState } from "react";
function Form() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [location, setLocation] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const formSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);

    }


    return (
        <div>
            {submitted ? (
                <div className="page">
                    <p>username:{username}</p>
                    <p>password:{password}</p>
                    <p>location:{location}</p>
                </div>
            ) : (
                <div className="form-color">
                    <form onSubmit={formSubmit}>
                        <label>username</label>
                        <input type="text" value={username} onChange={e => setUsername(e.target.value)} required /><br></br>
                        <label>password</label>
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} required /><br></br>
                        <label>location</label>
                        <input type="text" value={location} onChange={e => setLocation(e.target.value)} required /><br></br>

                        <button type="submit" className="button-col">submit</button>

                    </form>
                </div>
            )
            }

        </div>
    )
}
export default Form;