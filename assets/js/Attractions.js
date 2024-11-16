const menuToggle = document.getElementById('menu-toggle'); 
const menu = document.getElementById('menu'); 

menuToggle.addEventListener('click', function() {
    menu.classList.toggle('active'); 
});

let articlesData = [];
let currentPage = 1;
const itemsPerPage = 10;

function loadArticles(page = 1) {
    fetch(`https://67322e8b2a1b1a4ae10f29a6.mockapi.io/guide/v1/articles?page=${page}&limit=${itemsPerPage}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Error occurred');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            articlesData = data;
            displayArticles(articlesData);
            updatePagination();
        })
        .catch((err) => {
            console.log(err);
        });
}

function displayArticles(articles) {
    const articlesDiv = document.getElementById('articles');
    articlesDiv.innerHTML = '';

    articles.forEach(item => {
        const article = document.createElement('div');
        article.classList.add('article');
        article.setAttribute('data-id', item.id);

        const title = document.createElement('h2');
        title.textContent = item.title;
        article.appendChild(title);

        const image = document.createElement('img');
        image.src = item.imageUrl; 
        image.alt = item.title;
        article.appendChild(image);

        const content = document.createElement('p');
        content.textContent = item.content.substring(0, 300) + '...   Читать дальше';
        article.appendChild(content);

        const image2 = document.createElement('img');
        image2.src = item.imageUrl2; 
        image2.alt = item.title;

        const content2 = document.createElement('p');
        content2.textContent = item.content;

        articlesDiv.appendChild(article);

        article.addEventListener('click', function() {
            const articleId = this.getAttribute('data-id');
            const selectedArticle = articlesData.find(a => a.id == articleId);
            displayDetails(selectedArticle);
            toggleFullScreen();
        });
    });
}

function filterArticlesByCategory(category) {
    const articlesDiv = document.getElementById('articles');
    articlesDiv.innerHTML = '';

    let filteredArticles = articlesData;
    if (category !== 'asc') {
        filteredArticles = articlesData.filter(article => article.category === category);
    }

    displayArticles(filteredArticles);
}

document.querySelectorAll('.sort__container-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const category = this.getAttribute('data-category') || 'asc';
        filterArticlesByCategory(category);
    });
});

document.querySelector('.sort__container-button').addEventListener('click', function(event) {
    event.stopPropagation(); 
    const dropdown = document.querySelector('.sort__container-dropdown');
    dropdown.classList.toggle('show');
});

function filterArticlesBySearch(query) {
    const filteredArticles = articlesData.filter(article => {
        return article.title.toLowerCase().includes(query.toLowerCase()) || article.content.toLowerCase().includes(query.toLowerCase());
    });

    displayArticles(filteredArticles);
}

document.getElementById('searchInput').addEventListener('input', function() {
    const query = this.value.trim();
    filterArticlesBySearch(query);
});

function updatePagination() {
    const paginationDiv = document.getElementById('pagination');
    paginationDiv.innerHTML = '';

    for (let i = 1; i <= 3; i++) { 
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#';
        a.textContent = i;
        a.addEventListener('click', () => loadArticles(i));
        li.appendChild(a);
        paginationDiv.appendChild(li);
    }
}

loadArticles();

function displayDetails(article) {
    const detailsDiv = document.getElementById('modal-details');
    detailsDiv.innerHTML = `
        <h1>${article.title}</h1>
        <img src="${article.imageUrl}" alt="${article.title}"></img>
        <p1>${article.content}</p1>
        <img src="${article.imageUrl2}" alt="${article.title}"></img>
        <p>${article.content2}</p>  
    `

    const mapUrl = `https://maps.google.com/maps?q=${article.latitude},${article.longitude}&z=15&output=embed`;
    const map = document.createElement('iframe');
    map.src = mapUrl;
    map.width = '100%';
    map.height = '600';
    map.style.border = '0';
    detailsDiv.appendChild(map);
}

function toggleFullScreen() {
    const detailsDiv = document.getElementById('details');
    detailsDiv.classList.toggle('hidden');
}

document.querySelector('.back-button').addEventListener('click', function() {
    toggleFullScreen();
    updateUrl(null);
});