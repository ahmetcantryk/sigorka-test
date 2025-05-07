"use client";
import { useState, useMemo } from 'react';
import BlogNav from './BlogNav';
import BlogList from './BlogList';

export default function BlogClientArea({ blogs, categories }: { blogs: any[], categories: any[] }) {
  const [selectedCategoryId, setSelectedCategoryId] = useState(1);
  const currentCategory = useMemo(() => categories.find(c => c.id === selectedCategoryId), [categories, selectedCategoryId]);
  const h3Title = currentCategory && currentCategory.id !== 1 ? `${currentCategory.name} Yazıları` : 'Tüm Yazılar';

  return (
    <>
      <BlogNav categories={categories} selectedCategoryId={selectedCategoryId} onCategoryChange={setSelectedCategoryId} />
      <h3 className="blog-section__title">{h3Title}</h3>
      <BlogList blogs={blogs} selectedCategoryId={selectedCategoryId} />
    </>
  );
} 