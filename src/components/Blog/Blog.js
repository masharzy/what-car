import React from "react";

const Blog = ({ blog }) => {
  const { img, title, author, description } = blog;

  return (
    <div className="col-md-6 mb-4">
      <div className="card h-100 blog-card">
        <img className="w-100" src={img} alt="" />
        <div className="card-body">
          <h3 style={{ fontSize: "22px" }}>{title}</h3>
          <p className="text-muted">Author: {author}</p>
          <p className="content" style={{ fontSize: "16px" }}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
