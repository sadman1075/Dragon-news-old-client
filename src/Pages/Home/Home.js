import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../Shared/Newssummarycard/NewsSummaryCard';

const Home = () => {
    const Allnews=useLoaderData();
    return (
        <div>
            <h2>Dragon News Home:{Allnews.length}</h2>
            {
                Allnews.map(news=><NewsSummaryCard key={news._id} news={news}></NewsSummaryCard>)
            }
        </div>
    );
};

export default Home;