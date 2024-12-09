import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../Shared/Newssummarycard/NewsSummaryCard';

const Category = () => {
    const categorynews=useLoaderData();
    return (
        <div>
            <h1>this is category of news :{categorynews.length}</h1>

            {
                categorynews.map(news=><NewsSummaryCard key={categorynews._id} news={news}></NewsSummaryCard>)
            }
        </div>
    );
};

export default Category;