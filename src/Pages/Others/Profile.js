import React, { useContext, useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Authcontex } from '../../contex/Contex';

const Profile = () => {
    const { user } = useContext(Authcontex)
    const [name, setname] = useState(user.displayName);
    
    const photourlref = useRef(user.photoURL)

    const handleprofile = (event) => {
        event.preventDefault();
     console.log(photourlref.current.value)
    }


    return (
        <div className='mb-5'>
            <Form onSubmit={handleprofile}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control readOnly defaultValue={user?.email} type="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control name='name' defaultValue={user?.displayName} type="text" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Photo Url</Form.Label>
                    <Form.Control ref={photourlref} name='photourl' defaultValue={user?.photoURL} type="text" placeholder="Photo url" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Profile;