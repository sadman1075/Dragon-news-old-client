import React, { useContext } from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaWhatsapp, FaTwitter, FaTwitch } from 'react-icons/fa'
import BrandCarousel from '../BrandCarosul/BrandCarousel';
import { Authcontex } from '../../../contex/Contex';
import { GoogleAuthProvider } from 'firebase/auth';

const RightSideNav = () => {
    const {GoogleProviderlogin}=useContext(Authcontex)
   
   const googleprovider=new GoogleAuthProvider();
    const handlelogin=()=>{
    GoogleProviderlogin(googleprovider)
    .then(result=>{
        const user=user.result;
        console.log(user)
    })
    .catch(error=>{
        console.error(error);
    })

   }
    return (
        <div>
            <div className="d-grid gap-2">
                <Button variant="outline-primary" size="lg" onClick={handlelogin}>
                    <FaGoogle></FaGoogle> Login With Google
                </Button>
                <Button variant="outline-dark" size="lg">
                    <FaGithub></FaGithub> Login With Github
                </Button>
            </div>
            <div className='mt-4'>
                <h5>Find Us On</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook></FaFacebook>  Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp></FaWhatsapp>  WhatsApp</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter></FaTwitter>  Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitch></FaTwitch>  Twitch</ListGroup.Item>
                </ListGroup>
            </div>
            <div className='mb-5'>
                <BrandCarousel></BrandCarousel>
            </div>
        </div>
    );
};

export default RightSideNav;