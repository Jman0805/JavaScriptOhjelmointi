'use strict';

function listShows(list) {
    let parts = document.getElementById("shows");
    parts.innerHTML = '';
    list.forEach(x => {
        const data = x.show;
        const article = document.createElement('article');

        const h2 = document.createElement('h2');
        h2.textContent = data.name;

        const url = document.createElement('a');
        url.href = data.url;
        url.target = '_blank';

        const figure = document.createElement('figure')

        const img = document.createElement('img');
        img.src = data.image ? data.image.medium : 'https://placehold.co/210x295?text=Not%20Found';
        img.alt = data.name;

        figure.appendChild(img);

        const div = document.createElement('div');
        div.innerHTML = data.summary;

        article.appendChild(h2);
        article.appendChild(url);
        article.appendChild(figure);
        article.appendChild(div);

        parts.appendChild(article);
    });
}

const airportForm = document.querySelector('#search-form')
airportForm.addEventListener('submit', async function(evt) {
 
    evt.preventDefault();
    
    const code = document.querySelector('input[name=q]').value;

    try {            
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(code)}`);    
        const jsonData = await response.json();
        listShows(jsonData);      
        console.log(jsonData);  
    } catch (error) {
        console.log(error.message);
    }
});