"use client";
import { useState, useMemo } from 'react';
import BlogNav from './BlogNav';
import BlogList from './BlogList';

interface Category {
  id: number;
  name: string;
}

interface Blog {
  id?: number;
  title: string;
  date: string;
  slug?: string;
  imageUrl?: string;
  htmlContent?: string;
  categories?: Category[];
  summary?: string;
}

export default function BlogClientArea({ blogs, categories }: { blogs: Blog[], categories: Category[] }) {
  const [selectedCategoryId, setSelectedCategoryId] = useState(1);
  const currentCategory = useMemo(() => categories.find(c => c.id === selectedCategoryId), [categories, selectedCategoryId]);
  const h3Title = currentCategory && currentCategory.id !== 1 ? `${currentCategory.name} Yazıları` : 'Tüm Yazılar';

  return (
    <>
      <BlogNav categories={categories} selectedCategoryId={selectedCategoryId} onCategoryChange={setSelectedCategoryId} />
      <h3 className="blog-section__title">{h3Title}</h3>
      <BlogList blogs={blogs.map(blog => ({
        id: blog.id || 0,
        title: blog.title,
        summary: blog.summary || '',
        imageUrl: blog.imageUrl || '/images/no-image.jpg',
        date: blog.date,
        categories: blog.categories,
        slug: blog.slug
      }))} selectedCategoryId={selectedCategoryId} />
    </>
  );
} 