document.getElementById("anagram-form").addEventListener("submit", async function (event) {
    event.preventDefault();

    const inputWord = document.getElementById("input-word").value;
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = ""; // Clear previous results

    if (!inputWord.trim()) {
        resultsDiv.textContent = "Please enter a valid word.";
        return;
    }

    try {
        const anagrams = findAnagrams(inputWord);
        if (anagrams.length > 0) {
            resultsDiv.innerHTML = `<h2>Possible Anagrams:</h2><ul>${anagrams.map(word => `<li>${word}</li>`).join("")}</ul>`;
        } else {
            resultsDiv.textContent = "No anagrams found.";
        }
    } catch (error) {
        resultsDiv.textContent = "An error occurred. Please try again.";
        console.error("Error finding anagrams:", error);
    }
});

function findAnagrams(word) {
    // Example function body. Replace with actual anagram logic.
    const dictionary = ["cat", "act", "dog", "god"]; 
    const sortedWord = word.toLowerCase().split("").sort().join("");

    return dictionary.filter(dictWord => dictWord.split("").sort().join("") === sortedWord);
}