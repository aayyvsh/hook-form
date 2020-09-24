import React, {useState} from 'react';


const RegForm = (props) => {

    const [formState, setFormState] = useState({
        fName: "",
        lName: "",
        email: "",
        password: "",
        confirmpassword: "",
    });

    const [display, setDisplay] = useState(null);

    const onChangeHandler = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        setDisplay(formState);
        setFormState({
            fName:"",
            lName:"",
            email:"",
            password:"",
            confirmPassword:""
        });
    }

    return(
        <div>
            <div class="center w-50 p-3 bg-dark text-light ">

            <form onSubmit={onSubmitHandler}>
                <label>First Name</label>
                <input type="text" 
                name="fName" 
                onChange={onChangeHandler}/>
                {formState.fName.length === 0 ? true: formState.fName.length < 2 ? 
                <p>Length must be atleast two characters</p>: true}
                <br/>

                <label>Last Name</label>
                <input type="text" 
                name="lName" 
                onChange={onChangeHandler}/>
                {formState.lName.length === 0 ? true: formState.lName.length < 2 ? 
                <p>Length must be atleast two characters</p>: true}
                <br/>

                <label>Email</label>
                <input type="email" name="email" onChange={onChangeHandler}/>
                {formState.email.length === 0 ? true: formState.email.length < 5 ? 
                <p>Length must be atleast five characters</p>: true}
                <br/>

                <label>Password</label>
                <input type="password" name="password" onChange={onChangeHandler}/>
                {formState.password.length === 0 ? true: formState.password.length < 8 ? 
                <p>Length must be atleast eight characters</p>: true}
                <br/>

                <label>Confirm Password</label>
                <input type="password" name="confirmpassword" onChange={onChangeHandler}/>
                {formState.confirmpassword === formState.password ? true :
                <p>Passwords must match</p>}
                <br/>
                
                <input type="submit" />
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