'use strict';

function listJokes(list) {
    let parts = document.getElementById("jokes");
    parts.innerHTML = '';
    list.forEach(x => {
        const article = document.createElement('article');

        const p = document.createElement('p');
        p.textContent = x.value;

        article.appendChild(p);

        parts.appendChild(article);
    });
}

const airportForm = document.querySelector('#search-form')
airportForm.addEventListener('submit', async function(evt) {
 
    evt.preventDefault();
    
    const code = document.querySelector('input[name=q]').value;

    try {            
        const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${encodeURIComponent(code)}`);    
        const jsonData = await response.json();
        console.log(jsonData); 
        listJokes(jsonData.result);      
    } catch (error) {
        console.log(error.message);
    }
});