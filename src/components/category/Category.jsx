import React from 'react';
import './Category.scss';

const Category = () => {
    return (
        <div className='category'>
            <div className="container">
                <div className="category-container">
                    <div className="category-item">
                        <div className="day">Sunday</div>
                        <div className="date">8 Jan 2023</div>
                    </div>
                    <div className="category-item">
                        <span>World</span>
                    </div>
                    <div className="category-item">
                        <span>Politics</span>
                    </div>
                    <div className="category-item">
                        <span>Business</span>
                    </div>
                    <div className="category-item">
                        <span>Sports</span>
                    </div>
                    <div className="category-item">
                        <span>Music</span>
                    </div>
                    <div className="category-item">
                        <span>Tech</span>
                    </div>
                    <div className="category-item">
                        <span>Science</span>
                    </div>
                    <div className="category-item">
                        <span>Health</span>
                    </div>
                    <div className="category-item">
                        <span>Entertainment</span>
                    </div>
                    <div className="category-item">
                        <span>Stocks</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category