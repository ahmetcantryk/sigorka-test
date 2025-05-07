import React, { useState, useMemo } from 'react';
import BlogCard from './BlogCard';
import ProposalCta from '../common/ProposalCta';
import { slugify } from './slugify';

interface Blog {
  id: number;
  title: string;
  summary: string;
  imageUrl: string;
  date: string;
  categories?: { id: number; name: string }[];
  slug?: string;
}

interface BlogListProps {
  blogs: Blog[];
  selectedCategoryId?: number | null;
}

const INITIAL_COUNT = 9; // 6 + ProposalCta + 3
const LOAD_MORE_COUNT = 6;

const BlogList: React.FC<BlogListProps> = ({ blogs, selectedCategoryId }) => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  // Kategoriye göre filtrele
  const filteredBlogs = useMemo(() => {
    if (!selectedCategoryId || selectedCategoryId === 1) return blogs;
    return blogs.filter(blog => blog.categories && blog.categories.some(cat => cat.id === selectedCategoryId));
  }, [blogs, selectedCategoryId]);

  // Slug'ı olmayan bloglar için başlıktan üret
  const blogsWithSlug = filteredBlogs.map(blog => ({
    ...blog,
    slug: blog.slug || slugify(blog.title),
  }));

  // İlk 6, sonra ProposalCta, sonra 3, sonra 6'şar...
  const renderBlogs = () => {
    const items = [];
    const firstSix = blogsWithSlug.slice(0, 6);
    const nextThree = blogsWithSlug.slice(6, 9);
    const rest = blogsWithSlug.slice(9, visibleCount);

    firstSix.forEach(blog => items.push(<BlogCard key={blog.id} blog={blog} />));
    if (nextThree.length > 0) items.push(<ProposalCta key="proposal-cta" />);
    nextThree.forEach(blog => items.push(<BlogCard key={blog.id} blog={blog} />));
    rest.forEach(blog => items.push(<BlogCard key={blog.id} blog={blog} />));
    return items;
  };

  const hasMore = visibleCount < blogsWithSlug.length;

  return (
    <>
      <div className="row blog-container">
        {renderBlogs()}
      </div>
      {hasMore && (
        <div className="d-flex w-100 justify-content-center mt-3">
          <button className="btn btn-wide btn-outline-secondary" onClick={() => setVisibleCount(v => v + LOAD_MORE_COUNT)}>
            Daha Fazla
          </button>
        </div>
      )}
    </>
  );
};

export default BlogList; 