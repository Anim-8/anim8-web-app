import matter from 'gray-matter';
import { Article, ArticleMetadata } from '../types/blog.types';

// Simple reading time calculator (replaces reading-time package)
function calculateReadingTime(text: string): string {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

// This will be populated by importing all markdown files
const articleModules = import.meta.glob('../content/articles/*.md', { 
  as: 'raw',
  eager: false 
});

export async function getAllArticles(): Promise<ArticleMetadata[]> {
  const articles: ArticleMetadata[] = [];

  for (const path in articleModules) {
    const articleContent = await articleModules[path]() as string;
    const { data, content } = matter(articleContent);
    
    // Calculate reading time from content
    const readTime = calculateReadingTime(content);
    
    articles.push({
      slug: data.slug,
      title: data.title,
      author: data.author,
      date: data.date,
      readTime: readTime,
      excerpt: data.excerpt,
      featuredImage: data.featuredImage,
      tags: data.tags || [],
    });
  }

  // Sort by date, newest first
  return articles.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  for (const path in articleModules) {
    const articleContent = await articleModules[path]() as string;
    const { data, content } = matter(articleContent);
    
    if (data.slug === slug) {
      const readTime = calculateReadingTime(content);
      
      return {
        slug: data.slug,
        title: data.title,
        author: data.author,
        date: data.date,
        readTime: readTime,
        excerpt: data.excerpt,
        featuredImage: data.featuredImage,
        tags: data.tags || [],
        content,
      };
    }
  }
  
  return null;
}