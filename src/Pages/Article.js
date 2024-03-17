import React, { useState, useEffect } from 'react'
import { useParams} from 'react-router-dom';
// import articleContent from './ArticleContent'

const Article = () => {
  const { name } = useParams();
  // const article = articleContent.articles.find((article) => article.name === name);
  const [articleInfo, setArticleInfo] = useState({ description: "", title: "", name: "" });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(`/api/articles/${name}`);
        const body = await result.json();
        console.log(body);
        setArticleInfo(body);
      } catch (error) {
        console.error("Error fetching article:", error);
      }
    };
    fetchData();
  }, [name]);
  
  if (!articleInfo) {
    return <h1>Loading...</h1>; // Add loading state if needed
  }
  
  return (
    <div className="container mx-auto mt-10 py-4">
      <h1 className=" text-green-600 hover:text-purple-400 text-xl font-bold mb-2">{articleInfo.name}</h1>
      {/* <h1 className="text-2xl font-bold mb-4">{articleInfo.title}</h1> */}
      <p className="leading-relaxed text-base mb-4">{articleInfo.description}</p>
      {/* {articleInfo.map((paragraph, index) => (
        <p key={index} className="mx-auto leading-relaxed text-base mb-4">
          {paragraph}
        </p>
      ))} */}
    </div>
  );
}

export default Article
