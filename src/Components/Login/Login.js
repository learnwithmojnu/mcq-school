import React, { useState } from 'react';
import { WebsiteName } from '../../App';
import { useAuth } from '../Auth/useAuth';

const Entry = () => {
    document.title = "Account | " + WebsiteName;
    const auth = useAuth();

    const [user, setUser] = useState({ name: '', email: '', password: '', phone: '', isValid: false, error: ''});

    // Input check
    const isValidName = email => /^[a-zA-Z ]{2,30}$/.test(email);
    const isValidEmail = email => /(.+)@(.+){2,}\.(.+){2,}/.test(email);
    const isValidPassword = pass => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/.test(pass);

    // Input Change
    const inputChange = e => {
        const newUser = { ...user }

        // Validation
        let isValid = true;
        if (e.target.name === "name") {
            isValid = isValidName(e.target.value);

            if (!isValidName(e.target.value)) {
                newUser.error = "Name should have contains only letters and at least 2 to up to 30 letters.";
            } else {
                newUser.error = "";
            }
        }
        if (e.target.name === "email") {
            isValid = isValidEmail(e.target.value);

            if (!isValidEmail(e.target.value)) {
                newUser.error = "Invalid Email formate.";
            } else {
                newUser.error = "";
            }
        }
        if (e.target.name === "password") {
            isValid = isValidPassword(e.target.value);

            if (!isValidPassword(e.target.value)) {
                newUser.error = "Password should have contained 1 uppercase and lowercase letter, 1 number, 1 special character and at least 8 to up to 30 characters.";
            } else {
                newUser.error = "";
            }
        }
        if (e.target.name === "confirmPassword") {
            let password = document.getElementById("password").value;

            if (password !== e.target.value) {
                newUser.error = "Password did not match";
                isValid = false;
            } else {
                newUser.error = "";
                isValid = true;
            }
        }

        newUser[e.target.name] = e.target.value;
        newUser.isValid = isValid;
        setUser(newUser);
    }

    // Register Account

    // Sign In User
    const signInUser = e => {
        auth.signInWithEmail(user.email, user.password).then(res => {
            if (res.email) window.location.pathname = '/';
        });

        e.preventDefault();
        e.target.reset();
    }
    return (
        <section className="flexCenter user">
            {
                    <div>
                        <div className="signArea row" id="signArea">
                            <div className="col-md-6">
                            </div>
                            <div className="col-md-6">
                                <form onSubmit={signInUser}>
                                    <h2 className="text-center"><strong>Login Now</strong></h2>
                                    <input type="email" name="email" onBlur={inputChange} className="input" placeholder="Enter your email" required />
                                    <input type="password" name="password" onBlur={inputChange} className="input" placeholder="Enter your password" required />
                                    <input type="submit" value="Sign In" className="submitBtn" />
                                </form> {/* Login form */}
                            </div>
                            {/*Form Submission */}
                        </div>{/* Sign In Area */}
                    </div>//Account Wrapper
            }
        </section>
    );
};

export default Entry;