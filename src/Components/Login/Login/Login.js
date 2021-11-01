/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react';
import './Login.css';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { signInUsingGoogle, setUser, setLoading, emailLogIn, user } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirectUrl = location.state?.form || "/home";

    const emailInput = e => {
        setEmail(e.target.value)
    }

    const passInput = (e) => {
        setPassword(e.target.value)
    }

    useEffect(() => {
        user?.email ? history.push(redirectUrl) : " ";
    }, [user, history, redirectUrl]);


    const handleESignIn = () => {
        emailLogIn(email, password)
            .then((userCredential) => {

                const user = userCredential.user;
                setUser(user)
                setLoading(false)
                history.push(redirectUrl);
            })
    }

    const handleGLogIn = () => {
        signInUsingGoogle()
            .then(result => {
                setUser(result.user);
                history.push(redirectUrl);
            })
            .finally(() => setLoading(false));
    }

    return (
        <div className="login">
            <h2 className="text-dark"> Login Please</h2>
            <div>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                >
                    <Form.Control onChange={emailInput} type="email" placeholder="name@example.com" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password">
                    <Form.Control onChange={passInput} type="password" placeholder="Password" />
                </FloatingLabel>
            </div>
            <br />
            <Button onClick={handleESignIn} variant="danger">Login <i class="fas fa-sign-in-alt"></i></Button>
            <hr />
            <Button onClick={handleGLogIn} variant="dark"><i class="fab fa-google"></i> Sign In</Button>
        </div>
    );
};

export default Login;