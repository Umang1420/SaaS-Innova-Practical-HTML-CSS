let quotes = [];

const quoteText = document.getElementById("p");
const newQuoteBtn = document.getElementById("ch");

async function load() {
    try {
        const response = await fetch("https://dummyjson.com/quotes");
        const data = await response.json();
        quotes = data.quotes || [];
        renderQuote();
    } catch (error) {
        console.error("Failed to load quotes:", error);
        if (quoteText) {
            quoteText.textContent = "Unable to load quote.";
        }
    }
}

function renderQuote() {

    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    if (quoteText) {
        quoteText.textContent = `"${randomQuote.quote}" - ${randomQuote.author}`;
    }
}

if (newQuoteBtn) {
    newQuoteBtn.addEventListener("click", load);
}

load();
