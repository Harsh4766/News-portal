import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Pagination from "./Pagination";

function NewsBoard({ category, search }) {
  const [articles, setArticles] = useState([]);
  const [currentpage, setCurrentPage] = useState(1);
  const [postperpage] = useState(6);
  const url = `https://news-api-lyart-seven.vercel.app/news?category=${category}`;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response =await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        const data =await response.json();
        console.log(data);
        if (data && data.articles) {
          const filteredArticles = data.articles.filter(article =>
            article.title && article.description && article.urlToImage
          );
          setArticles(filteredArticles);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchNews();
    setCurrentPage(1);
  }, [url]);

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(search.toLowerCase())
  );

  const lastpostindex = currentpage * postperpage;
  const firstpostindex = lastpostindex - postperpage;
  const currentposts = filteredArticles.slice(firstpostindex, lastpostindex);

  return (
    <div>
      <h4 className="text-center my-3">
        Latest <span className="badge text-bg-danger">News</span>
      </h4>
      <div className="row">
        {currentposts.map((news, index) => (
          <div key={index} className="col-md-4">
            <NewsItem
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          </div>
        ))}
      </div>
      <Pagination totalposts={articles.length} postperpage={postperpage} setCurrentPage={setCurrentPage} currentpage={currentpage} />
    </div>
  );
}

export default NewsBoard;
