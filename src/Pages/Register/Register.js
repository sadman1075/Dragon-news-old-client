import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Authcontex } from '../../contex/Contex';

const Register = () => {
    const [error, seterror] = useState(false)
    const[accepted,setaccepted]=useState(false)
    const { createuser,updateuserprofile } = useContext(Authcontex)
    const handleregister = (event) => {
        event.preventDefault();
        const Form = event.target;
        const name = Form.name.value;
        const photourl = Form.photourl.value;
        const email = Form.email.value;
        const password = Form.password.value;
        createuser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                Form.reset()
                seterror(' ')
                handleupdateprofile(name,photourl)

            })
            .catch(error => {
                seterror(error.message)
            })

    }

    const handleupdateprofile=(name,photourl)=>{
        const profile={
            displayName:name,
            photoURL:photourl,
        }
        updateuserprofile(profile)
        .then(()=>{

        })
        .catch(error=>{
            console.log(error)
        })
    }

    const handleaccepted=(event)=>{
        setaccepted(event.target.checked)
    }
    return (
        <div>
            <h2 className='text-center'>Registration Quickly !!!!!</h2>
            <Form onSubmit={handleregister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter Your Name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo Url</Form.Label>
                    <Form.Control type="text" name='photourl' placeholder="Enter Your Name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox"  onClick={handleaccepted} label={<>Accept <Link to='/terms'>Terms and Conditions</Link></>} />
                </Form.Group>
                <p className='text-danger'>{error}</p>
                <p>Already Have An Account? <Link to='/login'>LogIn</Link></p>

                <Button variant="primary" type="submit" className='mb-5' disabled={!accepted}>
                    Register
                </Button>
            </Form>
        </div>
    );
};

export default Register;