import React from 'react';
import './News.scss';
import moment from 'moment';
import { json, Link } from 'react-router-dom';


const News = ({ article, category }) => {
    const setNews = (news) => {
        localStorage.clear();
        localStorage.setItem('news', JSON.stringify(news));
    }
    return (
        <>{article && article.title && article.content && article.url ? <div className="news-card">
            <div className="news-img">
                <img src={article.urlToImage} alt="" />
            </div>
            <div className="news-container">
                <div className="news-brief">
                    <div className="news-date">{moment(article.publishedAt.toString()).format('MMM D, YYYY')}</div>
                    <div className="news-category">{category}</div>
                </div>
                <h2 className='news-headline'>{article.title.substring(0, 30)}...</h2>
                <div className="news-content">
                    {article.content ? article.content.substring(0, 150) : ''}...
                </div>
                <div className="news-footer">
                    <div className='news-source'>
                        <span>Source: </span>
                        <a target="_blank" href={article.url}>{article.source.name}</a>
                    </div>
                    <Link className='btn' to="read" onClick={() => setNews(article)}>Read</Link>
                </div>
            </div>
        </div> : ''}
        </>
    )
}

export default News