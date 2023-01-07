import React from 'react';
import './Articles.scss';
import News from '../../components/news/News';

const Articles = ({news, category}) => {
  return (
    <div className='articles'>
      <div className="news-card-container">
        {news && news.length > 0 ? news.map(article => <News key={article.title} category={category} article={article} />) : ''}
      </div>
    </div>
  )
}

export default Articles