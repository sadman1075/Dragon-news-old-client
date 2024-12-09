import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import {  FaStar } from "react-icons/fa";

const News = () => {
    const news=useLoaderData();
    const{title,details,image_url,rating,category_id,author,}=news;
    return (
        <div>
           <Card>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <div className='d-flex justify-content-between mt-4 mb-2'>
            <p><b>Author:</b>{author.name}</p>
            <p><b>Published Date:</b>{author.published_date}</p>
            <p><FaStar className='text-warning'></FaStar> {rating?.number}</p>
        </div>
        <Card.Text>
          {details}
        </Card.Text>
        <Link to={`/category/${category_id}`}>
        <Button variant="primary">All News in this Category</Button>
        </Link>
      </Card.Body>
    </Card>
        </div>
    );
};

export default News;