import './styles.css';

/**
  Write the addheadings() function here
*/
function addheadings() {
    // Select all article elements
    const articles = document.querySelectorAll('article');

    // Loop through each article
    articles.forEach(article => {
        // Get the text content of the article
        const articleText = article.textContent;

        // Create a new h2 element
        const heading = document.createElement('h2');
        heading.textContent = articleText;

        // Clear the article's original text
        article.textContent = '';

        // Append the new h2 element to the article
        article.appendChild(heading);
    });
}
/**
  Write the styleTutorialsAndArticles() function here
*/

/**
  Write the separateAllTutorials() function here
*/

/**
  No need to edit the following
*/