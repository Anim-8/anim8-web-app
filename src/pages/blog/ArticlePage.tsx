import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { Article } from '../../types/blog.types';
import { getArticleBySlug } from '../../utils/articleLoader';
import 'highlight.js/styles/github-dark.css'; // Choose your preferred theme

const ArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const loadArticle = async () => {
      if (!slug) {
        setNotFound(true);
        setLoading(false);
        return;
      }

      try {
        const articleData = await getArticleBySlug(slug);
        if (articleData) {
          setArticle(articleData);
        } else {
          setNotFound(true);
        }
      } catch (error) {
        console.error('Error loading article:', error);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    loadArticle();
  }, [slug]);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <p>Loading article...</p>
      </div>
    );
  }

  if (notFound || !article) {
    return <Navigate to="/404" replace />;
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Article Header */}
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          {article.title}
        </h1>
        
        <div className="flex items-center text-gray-600 mb-8">
          <span className="font-medium">{article.author}</span>
          <span className="mx-3">•</span>
          <time dateTime={article.date}>{article.date}</time>
          <span className="mx-3">•</span>
          <span>{article.readTime}</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="text-sm px-4 py-2 bg-gray-100 text-gray-700 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* Article Content */}
      <div className="prose prose-lg max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight]}
        >
          {article.content}
        </ReactMarkdown>
      </div>

      {/* Placeholder for future components */}
      <div className="mt-12 pt-12 border-t border-gray-200">
        <p className="text-gray-500 text-center">
          Email signup and related articles coming soon
        </p>
      </div>
    </article>
  );
};

export default ArticlePage;