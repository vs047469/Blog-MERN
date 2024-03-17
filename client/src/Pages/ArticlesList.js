import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
// import articleContent from "./ArticleContent";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchAllArticles = async () => {
      try {
        const result = await fetch('/api/articles');
        const body = await result.json();
        console.log(body);
        setArticles(body); // Assuming the response JSON has a key named 'articles' containing the array of articles
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };
    fetchAllArticles();
  }, []);

  return (
    <div className="container mx-auto py-4">
      {articles && articles.map((article, index) => (
        <div key={index} className="mb-8">
          {/* <h1 className="text-xl font-bold mb-2">{article.title}</h1> */}
          <Link to={`/article/${article.title}`} className=" text-green-600 hover:text-purple-400 hover:underline">
            <h1 className="text-xl font-bold mb-2">{article.name}</h1>
          </Link>
          <p className="leading-relaxed text-base">{article.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ArticlesList;