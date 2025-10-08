import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { Article } from '../../types/blog.types';
import { getArticleBySlug } from '../../utils/articleLoader';
import 'highlight.js/styles/atom-one-dark.css';

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
      <div className="max-w-4xl mx-auto px-4 py-12 min-h-screen" style={{ backgroundColor: 'var(--color-background)' }}>
        <div className="flex items-center justify-center">
          <div className="animate-pulse" style={{ color: 'var(--color-text-white)' }}>
            Loading article...
          </div>
        </div>
      </div>
    );
  }

  if (notFound || !article) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="min-h-screen pt-20" style={{ backgroundColor: 'var(--color-background)' }}>
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Article Header */}
        <header className="mb-12">
          <h1 
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-header)', color: 'var(--color-text-white)' }}
          >
            {article.title}
          </h1>
          
          <div 
            className="flex items-center mb-8 text-sm"
            style={{ fontFamily: 'var(--font-body)', color: 'rgba(234, 234, 234, 0.7)' }}
          >
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
                className="text-sm px-4 py-2 rounded-full"
                style={{ 
                  backgroundColor: 'var(--color-accent-primary)', 
                  color: 'var(--color-text-white)',
                  fontFamily: 'var(--font-body)'
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Article Content - CSS handles all styling */}
        <div className="article-content">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight]}
          >
            {article.content}
          </ReactMarkdown>
        </div>

        {/* Placeholder for future components */}
        <div 
          className="mt-12 pt-12 text-center"
          style={{ 
            borderTop: '1px solid var(--color-accent-primary)',
            color: 'rgba(234, 234, 234, 0.5)',
            fontFamily: 'var(--font-body)'
          }}
        >
          <p>Email signup and related articles coming soon</p>
        </div>
      </article>
    </div>
  );
};

export default ArticlePage;
