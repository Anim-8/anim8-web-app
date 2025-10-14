import React, { useEffect, useState } from 'react';
import { ArticleMetadata } from '../../types/blog.types';
import { getAllArticles } from '../../utils/articleLoader';
import BlogCard from '../../components/blog/BlogCard';

const BlogListingPage: React.FC = () => {
  const [articles, setArticles] = useState<ArticleMetadata[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const allArticles = await getAllArticles();
        setArticles(allArticles);
      } catch (error) {
        console.error('Error loading articles:', error);
      } finally {
        setLoading(false);
      }
    };

    loadArticles();
  }, []);

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-12">
        <p>Loading articles...</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-lg text-gray-600">
          Insights on modern metrology architecture for manufacturing
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <BlogCard key={article.slug} article={article} />
        ))}
      </div>

      {articles.length === 0 && (
        <p className="text-center text-gray-500">No articles yet. Check back soon!</p>
      )}
    </div>
  );
};

export default BlogListingPage;