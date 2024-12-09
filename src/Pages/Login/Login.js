import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Authcontex } from '../../contex/Contex';

const Login = () => {
    const[error,seterror]=useState(false)
    const navigate=useNavigate()
    const location=useLocation();
    const from=location.state?.from?.pathname || '/';
    const {singinwithemailpass}=useContext(Authcontex)
    const handlelogin=(event)=>{
       
        event.preventDefault();
        const Form=event.target;
        const email=Form.email.value;
        const password=Form.password.value;
        console.log (email,password);

        singinwithemailpass(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user)
            Form.reset();
            seterror('')
            navigate(from,{replace:true})

        })
        .catch(error=>{
            seterror(error.message)
        })
    }
    return (
        <div>
            <h2 className='text-center'>Login Now !!!</h2>
            <Form onSubmit={handlelogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required/>
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required/>
                </Form.Group>
                <p className='text-danger'>{error}</p>
            <p>Dont Have Any Account?<Link to='/register'>Register</Link></p>
                <Button variant="primary" type="submit" className="mb-3">
                    LogIn
                </Button>
            </Form>
        </div>
    );
};

export default Login;
