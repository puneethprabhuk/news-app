import React from 'react';
import './News.scss';

const News = () => {
    return (
        <div className="news-card">
            <div className="news-img">
                <img src="https://ichef.bbc.co.uk/wwhp/624/cpsprodpb/15B46/production/_128220988_mediaitem128220987.jpg" alt="" />
            </div>
            <div className="news-container">
                <div className="news-brief">
                    <div className="news-date">Jan 8, 2023</div>
                    <div className="news-category">World</div>
                </div>
                <h2 className='news-headline'>Harry: I was bigoted before Meghan</h2>
                <div className="news-content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, explicabo voluptatum nostrum assumenda quas delectus temporibus repudiandae aliquam doloribus in!
                </div>
                <div className="news-footer">
                    <button className='btn'>Read</button>
                </div>
            </div>
        </div>
    )
}

export default News