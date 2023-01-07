import React from 'react';
import News from '../../components/news/News';
import './Home.scss';

const Home = () => {
    return (
        <div className='home'>
            <div className="container">
                <div className="news-card-container">
                    <News />
                    <News />
                    <News />
                    <News />
                    <News />
                    <News />
                    <News />
                    <News />
                    <News />
                    <News />
                </div>
            </div>
        </div>
    )
}

export default Home