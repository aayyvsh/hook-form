import React, {useState} from 'react';


const RegForm = (props) => {

    const [user, setUser] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    });

    const [display, setDisplay] = useState(null);

    const handleUser = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setDisplay(user);
        setUser({
            firstName:"",
            lastName:"",
            email:"",
            password:"",
            confirmPassword:""
        });
    }

    return(
        <div>
            <div class="center w-50 p-3 bg-dark text-light ">

            <form classname = "form" onSubmit={handleSubmit}>
                <h2>Create User</h2>
                <div className="form-group">
                    <label>User First Name:</label>
                    <input
                        className="form-control"
                        type="text"
                        name="firstName"
                        value={user.firstName}
                        onChange={handleUser}
                    />
                </div>
                <div className="form-group">
                    <label>User Last Name:</label>
                    <input
                        className="form-control"
                        type="text"
                        name="lastName"
                        value={user.lastName}
                        onChange={handleUser}
                    />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        className="form-control"
                        type="text"
                        name="email"
                        value={user.email}
                        onChange={handleUser}
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        className="form-control"
                        type="text"
                        name="password"
                        value={user.password}
                        onChange={handleUser}
                    />
                </div>
                <div className="form-group">
                    <label>Confrim Password:</label>
                    <input
                        className="form-control"
                        type="text"
                        name="confirmPassword"
                        value={user.confirmPassword}
                        onChange={handleUser}
                    />
                </div>
                <input type="submit" className="btn btn-success" value="Create" />
            </form>
            </div>
            {
                display ?
                <div class="card w-40 p-3 bg-light text-dark">
                    <p>{display.firstName} {display.lastName}</p>
                    <p>{display.email}</p>
                    <p>{display.password}</p>
                    <p>{display.confirmPassword}</p>
                </div> : null
            }
        </div>
    );

}

export default RegForm;