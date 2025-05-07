import React from 'react';

interface BlogCardProps {
  blog: {
    id: number;
    title: string;
    summary: string;
    imageUrl: string;
    slug: string;
    date: string;
  };
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <div className="col-lg-4 col-md-6">
      <a href={`/blog/${blog.slug}`} target="_self" className="blog-post">
        <div className="blog-post__img">
          <img src={blog.imageUrl} alt={blog.title} className="img-fluid" />
        </div>
        <div className="blog-post__content">
          <h3 className="blog-post__title">{blog.title}</h3>
          <span className="blog-post__date">{blog.date}</span>
          <p className="blog-post__summary">
            {blog.summary}
          </p>
          <span className="blog-post__link">
            Devamını Oku <span className="icon-arrow-right"></span>
          </span>
        </div>
      </a>
    </div>
  );
};

export default BlogCard; 