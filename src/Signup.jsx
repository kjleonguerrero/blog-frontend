import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [status, setStatus] = useState(null);
  const [errors, setErrors] = useState([]);
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    console.log("handleSubmit", params);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
        setStatus(error.response.status);
      });
  };

  return (
    <div id="signup">
      <h1>SIGN UP!</h1>
      <ul>
        {status ? <img className="img-fluid" src={`https://http.dog/${status}.jpg`} /> : null}
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" value={name} onChange={(event) => setName(event.target.value)} />
          <small className={name.length > 20 ? "text-danger" : "text-dark"}>
            {20 - name.length} characters remaining
          </small>
        </div>
        <div>
          Email: <input name="email" type="email" />
        </div>
        <div>
          Password: <input name="password" type="password" />
        </div>
        <div>
          Password Confirmation: <input name="password_confirmation" type="password" />
        </div>
        <button type="submit" className="btn btn-secondary btn-danger">
          Sign Up!
        </button>
      </form>
    </div>
  );
}
