import React from 'react';
import { Link } from 'react-router-dom';
import { ArticleMetadata } from '../../types/blog.types';

interface BlogCardProps {
  article: ArticleMetadata;
}

const BlogCard: React.FC<BlogCardProps> = ({ article }) => {
  return (
    <Link 
      to={`/blog/${article.slug}`}
      className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="aspect-video bg-gray-200 overflow-hidden">
        <img
          src={article.featuredImage}
          alt={article.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            // Fallback if image doesn't exist
            e.currentTarget.src = 'https://via.placeholder.com/800x450?text=ANim8+Blog';
          }}
        />
      </div>

      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <span>{article.date}</span>
          <span className="mx-2">•</span>
          <span>{article.readTime}</span>
        </div>

        <h2 className="text-xl font-bold mb-3 text-gray-900 hover:text-blue-600 transition-colors">
          {article.title}
        </h2>

        <p className="text-gray-600 mb-4 line-clamp-3">
          {article.excerpt}
        </p>

        <div className="flex flex-wrap gap-2">
          {article.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;