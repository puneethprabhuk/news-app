import React from 'react';
import './Category.scss';
import moment from 'moment';
import { Link } from 'react-router-dom';


const Category = (props) => {
    const date = new Date();
    return (
        <div className='category'>
            <div className="container">
                <div className='mobile-date'>
                    <div className="category-item">
                        <div className="day">{moment(date.toString()).format('dddd')}</div>
                        <div className="date">{moment(date.toString()).format('MMM D, YYYY')}</div>
                    </div>
                </div>
                <div className="category-container">
                    <div className="category-item date-day">
                        <div className="day">{moment(date.toString()).format('dddd')}</div>
                        <div className="date">{moment(date.toString()).format('MMM D, YYYY')}</div>
                    </div>
                    <div className="category-item">
                        <Link className='link' to="/" onClick={() => props.getSelectedNews('general')}>General</Link>
                    </div>
                    <div className="category-item">
                        <Link className='link' to="/" onClick={() => props.getSelectedNews('business')}>Business</Link>
                    </div>
                    <div className="category-item">
                        <Link className='link' to="/" onClick={() => props.getSelectedNews('entertainment')}>Entertainment</Link>
                    </div>
                    <div className="category-item">
                        <Link className='link' to="/" onClick={() => props.getSelectedNews('health')}>Health</Link>
                    </div>
                    <div className="category-item">
                        <Link className='link' to="/" onClick={() => props.getSelectedNews('science')}>Science</Link>
                    </div>
                    <div className="category-item">
                        <Link className='link' to="/" onClick={() => props.getSelectedNews('technology')}>Technology</Link>
                    </div>
                    <div className="category-item">
                        <Link className='link' to="/" onClick={() => props.getSelectedNews('sports')}>Sports</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category