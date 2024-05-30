import React from 'react';
import NewsItems from './NewsItems';
import { motion } from 'framer-motion';

const HomePageNewsSection = () => {
  const newsData = [
    // Replace with your actual news data
    { title: 'News Article 1', description: 'Lorem ipsum dolor sit amet...', src: null, url: '#' },
    { title: 'News Article 2', description: 'Consectetur adipiscing elit...', src: null, url: '#' },
    // Add more news items as needed
  ];

  return (
    <div className="home-page-news-section">
      <h2>Latest News</h2>
      <div className="news-row">
        {newsData.slice(0, 2).map((news, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <NewsItems {...news} />
          </motion.div>
        ))}
      </div>
      <div className="news-row">
        {newsData.slice(2, 4).map((news, index) => (
          <motion.div
            key={index + 2}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: (index + 2) * 0.2 }}
          >
            <NewsItems {...news} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HomePageNewsSection;