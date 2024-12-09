import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IoBookmarks } from "react-icons/io5";
import { FaEye, FaShareAlt, FaStar } from "react-icons/fa";


const NewsSummaryCard = ({ news }) => {
    const { _id, title, author, total_view, details,rating, image_url } = news;
    return (
        <div className='mb-5 mt-5'>
            <Card className="">
                <Card.Header>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='d-flex '>
                            <Image src={author.img} width={50}
                                height={50} roundedCircle />
                            <div className='ms-4'>
                               <p className='mb-0'> {author.name}</p>
                               <p > {author.published_date}</p>
                        
                             
                               
                            </div>
                        </div>
                        <div className='me-3'>
                            < IoBookmarks className='me-2' />
                            <FaShareAlt />
                        </div>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />

                    <Card.Text>
                        {
                            details.length > 250 ?
                                <p>{details.slice(0, 250) + '...'}<Link to={`/news/${_id}`}>Read More</Link></p>
                                :
                                <p>{details}</p>

                        }
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between">
                   <div>
                   <FaStar className='text-warning me-2'></FaStar>
                    <span>{rating?.number}</span>
                   </div>
                  <div>
                    <FaEye className='me-2'></FaEye>
                    <span>{total_view}</span>
                  </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsSummaryCard;