// Get the form, search input, and article elements
const searchForm = document.getElementById("searchForm");
const searchTermInput = document.getElementById("searchTerm");
const articles = document.querySelectorAll(".articles article");

// Event listener for the form submit
searchForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Remove previous error message if it exists
    const existingError = document.getElementById("searchError");
    if (existingError) existingError.remove();

    // Get the search term and trim whitespace
    const searchTerm = searchTermInput.value.trim();

    // Check if the search term is blank
    if (searchTerm === "") {
        const errorElement = document.createElement("div");
        errorElement.className = "error";
        errorElement.id = "searchError";
        errorElement.textContent = "Please enter a search term";
        searchForm.appendChild(errorElement);
        return; // Exit if the form is blank
    }

    // Case-insensitive search for articles
    articles.forEach(article => {
        const title = article.querySelector("h2").innerText.toLowerCase();
        const isMatch = title.includes(searchTerm.toLowerCase());

        // Toggle visibility based on search match
        if (isMatch) {
            article.classList.remove("hidden");
        } else {
            article.classList.add("hidden");
        }
    });
});