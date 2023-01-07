import React, { useEffect, useState } from 'react';
import './NewsDetails.scss';
import moment from 'moment';

const NewsDetails = () => {
    const [article, setArticle] = useState({});
    useEffect(() => {
        const news = localStorage.getItem('news');
        if (news) {
            setArticle(JSON.parse(news));
        }
    }, []);

    return (
        <div className='news-details'>
            <div className="container">
                <div className="news-details-title">
                    <h1>{article.title}</h1>
                    <div className='news-details-subtitle'>
                        <div>
                            {article && article.publishedAt && moment(article.publishedAt.toString()).format('MMM D, YYYY')}
                        </div>
                        <a href={article.url} target="_blank">
                            {article.source && article.source.name ? article.source.name : 'Unknown source'}
                        </a>
                    </div>
                </div>
                <div className="news-details-content">
                    <div className="news-details-image">
                        <img src={article && article.urlToImage} alt="" />
                    </div>
                    <div className="news-details-text">
                        <p>{article && article.content}</p>
                        <p>{article && article.description}</p>
                        <p>{article && article.title}</p>
                    </div>
                </div>
                <div className="credit">Credit: {article.author ? article.author : 'Unknown'}</div>
            </div>
        </div>
    )
}

export default NewsDetails