import React from 'react';
import News from '../../components/news/News';
import Articles from '../articles/Articles';
import NewsDetails from '../news-details/NewsDetails';
import './Home.scss';

const Home = ({news, category}) => {
    return (
        <div className='home'>
            <div className="container">
                <Articles category={category} news={news} />
            </div>
        </div>
    )
}

export default Home