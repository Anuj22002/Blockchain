import React, { useState, useEffect } from 'react';
import NewsItems from './NewsItmes'; // Assuming you have a component to render each news item
import '../styles/news_dashboard.css';


const NewsBoard = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const apiKey = 'a41496910a2747aba3776c0d47b815cb'; // Replace with your actual API key
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=${apiKey}`;
    
    fetch(url)
      .then(response => response.json())
      .then(data => setArticles(data.articles))
      .catch(error => console.error('Error fetching news:', error));
  }, []);

  return (
    <div className="my-2 mb-5">
      <h1 className="mt-4 mb-3 text-center mb-5 mt-3 Latest_News_Heading slide-in-elliptic-bottom-bck">Latest News</h1>
      <div>
      <div className="news-card-container">
        {articles.map((news, index) => (
          <NewsItems
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        ))}
      </div>
      </div>
    </div>
  );
};

export default NewsBoard;
