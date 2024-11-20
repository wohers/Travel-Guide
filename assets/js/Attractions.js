const menuToggle = document.getElementById('menu-toggle'); 
const menu = document.getElementById('menu'); 

menuToggle.addEventListener('click', function() {
    menu.classList.toggle('active'); 
});

let articlesData = [];
let currentPage = 1;
const itemsPerPage = 10;

const loader = document.getElementById('loader');
loader.style.display = 'flex'

function loadArticles(page = 1) {
    fetch(`https://67322e8b2a1b1a4ae10f29a6.mockapi.io/guide/v1/articles?page=${page}&limit=${itemsPerPage}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Error occurred');
            }
            return response.json();
        })
        .then(data => {
            loader.style.display = 'none'
            console.log(data);
            articlesData = data;
            displayArticles(articlesData);
            updatePagination();
        })
        .catch((err) => {
            console.log(err);
        });
}


let AllarticlesData = []
fetch(`https://67322e8b2a1b1a4ae10f29a6.mockapi.io/guide/v1/articles`)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Error occurred');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            AllarticlesData = data;
            displayArticles(AllarticlesData);
        })
        .catch((err) => {
            console.log(err);
        });


function displayArticles(articles) {
    const articlesDiv = document.getElementById('articles');
    articlesDiv.innerHTML = '';

    articles.forEach(item => {
        const article = document.createElement('div');
        article.classList.add('article');

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

        title.addEventListener('click', function() {
            const articleUrl = `shablon.html?id=${item.id}`;
            window.open(articleUrl);
        })
    });
}

function filterArticlesByCategory(category) {
    const articlesDiv = document.getElementById('articles');
    articlesDiv.innerHTML = '';
    

    if (category === 'asc') {
        filteredArticles = articlesData
    }
    else if (category !== 'asc') {
        filteredArticles = AllarticlesData.filter(article => article.category === category);
    }
    displayArticles(filteredArticles);
}

const sortContainerLink = document.querySelectorAll('.sort__container-link')
sortContainerLink.forEach(link => {
    link.addEventListener('click', function() {
        const category = this.getAttribute('data-category') || 'asc';
        filterArticlesByCategory(category);
    });
});

const button = document.querySelector('.sort__container-button')
button.addEventListener('click', function(event) {
    const dropdown = document.querySelector('.sort__container-dropdown');
    dropdown.classList.toggle('show');
}); 

function filterArticlesBySearch(query) {
    let filteredArticles = AllarticlesData.filter(article => {
        const lowerCaseTitle = article.title.toLowerCase();
        const lowerCaseQuery = query.toLowerCase();
        return lowerCaseTitle.includes(lowerCaseQuery);
    });
    displayArticles(filteredArticles);
}

const search = document.getElementById('searchInput')
search.addEventListener('input', function() {
    const query = search.value;
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