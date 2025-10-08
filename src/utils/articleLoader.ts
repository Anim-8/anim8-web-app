import { Article, ArticleMetadata } from '../types/blog.types';

// Simple reading time calculator
function calculateReadingTime(text: string): string {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

// Manual frontmatter parser (browser-safe alternative to gray-matter)
function parseFrontmatter(fileContent: string): { data: any; content: string } {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = fileContent.match(frontmatterRegex);

  if (!match) {
    return { data: {}, content: fileContent };
  }

  const frontmatterText = match[1];
  const content = match[2];

  // Parse YAML-like frontmatter into object
  const data: any = {};
  const lines = frontmatterText.split('\n');
  let currentKey = '';
  let inArray = false;
  let arrayValues: string[] = [];

  for (const line of lines) {
    const trimmedLine = line.trim();
    
    if (!trimmedLine) continue;

    // Handle array items (lines starting with -)
    if (trimmedLine.startsWith('-')) {
      if (inArray) {
        arrayValues.push(trimmedLine.substring(1).trim());
      }
      continue;
    }

    // If we were in an array and hit a new key, save the array
    if (inArray && trimmedLine.includes(':')) {
      data[currentKey] = arrayValues;
      arrayValues = [];
      inArray = false;
    }

    // Handle key-value pairs
    if (trimmedLine.includes(':')) {
      const colonIndex = trimmedLine.indexOf(':');
      const key = trimmedLine.substring(0, colonIndex).trim();
      const value = trimmedLine.substring(colonIndex + 1).trim();

      currentKey = key;

      if (value) {
        // Single value
        data[key] = value;
      } else {
        // Start of array
        inArray = true;
        arrayValues = [];
      }
    }
  }

  // Save any remaining array
  if (inArray && arrayValues.length > 0) {
    data[currentKey] = arrayValues;
  }

  return { data, content };
}

// Manual article imports - add new articles here
const articleImports: Record<string, () => Promise<any>> = {
  'what-manufacturing-needs-from-metrology': () => 
    import('../content/articles/what-manufacturing-needs-from-metrology.md?raw'),
};

export async function getAllArticles(): Promise<ArticleMetadata[]> {
  const articles: ArticleMetadata[] = [];

  for (const slug in articleImports) {
    try {
      const module = await articleImports[slug]();
      const articleContent = typeof module === 'string' ? module : module.default;
      const { data, content } = parseFrontmatter(articleContent);
      
      const readTime = calculateReadingTime(content);
      
      articles.push({
        slug: data.slug || slug,
        title: data.title,
        author: data.author,
        date: data.date,
        readTime: readTime,
        excerpt: data.excerpt,
        featuredImage: data.featuredImage,
        tags: Array.isArray(data.tags) ? data.tags : [],
      });
    } catch (error) {
      console.error(`Error loading article ${slug}:`, error);
    }
  }

  // Sort by date, newest first
  return articles.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  if (!articleImports[slug]) {
    return null;
  }

  try {
    const module = await articleImports[slug]();
    const articleContent = typeof module === 'string' ? module : module.default;
    const { data, content } = parseFrontmatter(articleContent);
    
    const readTime = calculateReadingTime(content);
    
    return {
      slug: data.slug || slug,
      title: data.title,
      author: data.author,
      date: data.date,
      readTime: readTime,
      excerpt: data.excerpt,
      featuredImage: data.featuredImage,
      tags: Array.isArray(data.tags) ? data.tags : [],
      content,
    };
  } catch (error) {
    console.error(`Error loading article ${slug}:`, error);
    return null;
  }
}