import React from 'react';
import newsImg from '../media/news-img.png';
import '../styles/news_items.css';

function NewsItems({ title, description, src, url }) {
  return (
    <div className="news-card">
      <div className="news-card-inner">
        <img src={src ? src : newsImg} className="news-card-image" alt="News" />
        <div className="news-card-content">
          <h5 className="news-card-title">{title.slice(0, 50)}</h5>
          <p className="news-card-description">{description && description.length >= 100 ? description.slice(0, 100) : description}</p>
          <a href={url} className="btn btn-primary news-card-btn" target='blank'>Read More</a>
        </div>
      </div>
    </div>
  );
}

export default NewsItems;
