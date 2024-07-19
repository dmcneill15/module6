import { useState } from "react";

function LoginForm() {
    // input state values always need to be strings - empty initially
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    return (
        <div className="LoginForm componentBox">
            <div className="formRow">
                <label>Email Address:
                    {/* Controlled form element needs both value and onChange.
onChange handler uses event param e to access target value.
Whenever user types, new value is stored in state. */}
                    <input type="email" value={userEmail} name="userEmail"
                        onChange={(e) => setUserEmail(e.target.value)} />
                </label>
            </div>
            <div className="formRow">
                <label>Password:
                    <input type="password" value={userPassword} name="password"
                        onChange={(e) => setUserPassword(e.target.value)} />
                </label>
            </div>
        </div>
    )
}
// try removing the onChange prop and typing in a field
export default LoginForm

//These login form elements userEmail and password are controlled components - React controls their state
//the onChange handler function allows the user to still interact with the form

export function LoginForm2() {
    // input state values always need to be strings - empty initially
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    // new state value for showing submission messages to user
    const [submitResult, setSubmitResult] = useState('');
    const [failedAttempts, setFailedAttempts] = useState(0);    //default failed attempts to zero

    const handleSubmit = (e) => {
        e.preventDefault(); // prevent page reloading on form submit

        //add passrod validation
        if (failedAttempts >= 2) {
            setSubmitResult('Too many failed attempts!');
        }
        else if (userPassword.length < 5) {
            setSubmitResult('Password must be at least 5 characters long');
            setFailedAttempts(failedAttempts + 1);
        }
        else if (userPassword == userEmail) {
            setSubmitResult('Password cannot match email');
            setFailedAttempts(failedAttempts + 1);
        }
        else {
            setSubmitResult('Login Successful!');
            setFailedAttempts(failedAttempts + 1);
        }

    }

    return (
        <div className="LoginForm componentBox">
            {failedAttempts < 3 ? 
            (
                <form onSubmit={handleSubmit}>
                    <div className="formRow">
                        <label>Email Address:
                            <input type="email" value={userEmail} name="userEmail"
                                onChange={(e) => setUserEmail(e.target.value)} />
                        </label>
                    </div>
                    <div className="formRow">
                        <label>Password:
                            <input type="password" value={userPassword} name="password"
                                onChange={(e) => setUserPassword(e.target.value)} />
                        </label>
                    </div>
                    <button>Log In</button>
                </form>
            ) : (<p>Too Many Failed Attempts. Please try again later.</p>)}
            <p>{submitResult}</p>
        </div>
    )
}
//why is my form not hiding??
