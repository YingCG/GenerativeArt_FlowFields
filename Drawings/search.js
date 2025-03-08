const documents = [
    { id: 1, content: "JavaScript is a versatile programming language." },
    { id: 2, content: "Search engines are crucial for finding information online." },
    { id: 3, content: "Building a search engine involves indexing and ranking." },
    { id: 4, content: "JavaScript can be used for both front-end and back-end development." },
];

function performSearch() {
    const query = document.getElementById('searchBox').value.toLowerCase();
    
    console.log("start searching")
    const results = search(query);
    console.log(query)
    displayResult(results);
}

function search(query) {
    return documents.filter(doc => doc.content.toLowerCase().includes(query));
}

function displayResult(results){
    const resultsElement = document.getElementById('results');
    resultsElement.innerHTML = '';
    results.forEach(result => {
        const listItem = document.createElement('li');
        listItem.textContent = result.content;
        resultsElement.appendChild(listItem);
    })
}