export interface Article {
  id: number;
  title: string;
  content: string;
}

export interface ProcessedArticle extends Article {
  // TODO: add the properties
}

// TODO: type the function parameter and its return type
export async function fetchAndProcessArticles(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch articles: ${response.status}`);
    }
    const articles: Article[] = await response.json();

    return articles.map(article => ({
      ...article,
      timestamp: new Date().toISOString(),
      status: 'processed'
    }));
  } catch (error) {
    console.error(error);
    throw new Error(`Error processing articles: ${error.message}`);
  }
}

