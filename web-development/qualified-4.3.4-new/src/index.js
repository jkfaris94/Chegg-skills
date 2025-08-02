import "./styles.css";

console.log(document);
/**
  Write the addheadings() function here
*/
function addHeadings() {
    // Select all article elements
    const articles = document.querySelectorAll('article');

    // Loop through each article
    articles.forEach(article => {
        // Create a new h2 element
        const heading = document.createElement('h2');

        // Set the text content of the h2 element to the article's text content
        heading.textContent = article.textContent.trim();

        // Clear the original text of the article
        article.textContent = '';

        // Append the new h2 element to the article
        article.appendChild(heading);
    });
}

function styleTutorialsAndArticles() {
    // Select all article elements
    const articles = document.querySelectorAll('article');

    // Loop through each article
    articles.forEach(article => {
        // Check if the article contains the word "Tutorial"
        if (article.textContent.includes("Tutorial")) {
            article.classList.add('tutorial'); // Add class 'tutorial'
        } else {
            article.classList.add('articles'); // Add class 'article'
        }
    });
}

function separateAllTutorials() {
    // Select all article elements
    const articles = document.querySelectorAll('article');
    
    // Create a new section for tutorials
    const tutorialsSection = document.createElement('section');
    tutorialsSection.classList.add('tutorials');

    // Flag to track if any tutorials were found
    let hasTutorials = false;

    // Loop through each article
    articles.forEach(article => {
        // Check if the article contains the word "Tutorial"
        if (article.classList.contains('tutorial')) {
            // Move the tutorial article to the new section
            tutorialsSection.appendChild(article);
            hasTutorials = true; // Mark that we found a tutorial
        }
    });

    // If there are tutorials, append the new section to the container
    if (hasTutorials) {
        const container = document.querySelector('.container');
        container.appendChild(tutorialsSection);
    }
}

/**
  Write the styleTutorialsAndArticles() function here
*/

/**
  Write the separateAllTutorials() function here
*/

/**
  No need to edit the following

function main() {
  addHeadings();
  styleTutorialsAndArticles();
  separateAllTutorials();
}

main();
*/
