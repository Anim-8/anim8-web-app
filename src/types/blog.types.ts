export interface ArticleMetadata {
  slug: string;
  title: string;
  author: string;
  date: string;
  readTime: string;
  excerpt: string;
  featuredImage: string;
  tags: string[];
}

export interface Article extends ArticleMetadata {
  content: string;
}