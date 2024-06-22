import React from "react";
import image from "../src/news.jpeg";

function NewsItem({ title, description, src, url }) {
  return (
    <div className="card mb-4 my-4 bg-body-tertiary mx-4 px-4 py-4" style={{ maxWidth: "360px" }}>
      <img src={src?src:image} style={{height:"200px", width:"310 px"}} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0,50)}</h5>
        <p className="card-text">{description.slice(0,90)}</p>
        <a href={url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
}

export default NewsItem;
