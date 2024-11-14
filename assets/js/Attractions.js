
const menuToggle = document.getElementById('menu-toggle'); 
const menu = document.getElementById('menu'); 

menuToggle.addEventListener('click', function() {
    menu.classList.toggle('active'); 
});


fetch('https://67322e8b2a1b1a4ae10f29a6.mockapi.io/guide/v1/articles')
    .then((response) => {
        if (!response.ok) {
            throw new Error('Error occurred');
        }
        return response.json();
    })
    .then(articlesData => {
        return fetch('https://67322e8b2a1b1a4ae10f29a6.mockapi.io/guide/v1/details')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Error occurred');
                }
                return response.json();
            })
            .then(detailsData => {
                const combinedData = [];

                articlesData.forEach(article => {
                    const details = detailsData.find(detail => detail.id === article.id);

                    if (details) {
                        combinedData.push({ ...article, details });
                    } else {
                        combinedData.push({ ...article, details: {} });
                    }
                });

                console.log(combinedData);
                const articlesContainer = document.getElementById('articles');

                combinedData.forEach(item => {
                    const articleDiv = document.createElement('div');
                    articleDiv.classList.add('article');
                    articleDiv.setAttribute('data-id', item.id); 

                    const title = document.createElement('h2');
                    title.textContent = item.title;
                    articleDiv.appendChild(title);

                    const img = document.createElement('img');
                    img.src = item.imageUrl;
                    img.alt = item.title;
                    articleDiv.appendChild(img);

                    const content = document.createElement('p');
                    content.textContent = item.content.substring(0, 200) + '... Читать дальше...';
                    articleDiv.appendChild(content);

                    articlesContainer.appendChild(articleDiv);
                });

                const articleElements = document.querySelectorAll('.article');
                articleElements.forEach(article => {
                    article.addEventListener('click', function() {
                        const articleId = this.getAttribute('data-id');
                        const selectedArticle = combinedData.find(a => a.id == articleId);
                        displayDetails(selectedArticle);
                        toggleFullScreen();
                    });
                });

                const backButton = document.querySelector('.back-button');
                backButton.addEventListener('click', function() {
                    toggleFullScreen();
                });
            });
    })
    .catch((err) => {
        console.log(err);
    });

    function displayDetails(item) {
        const modalContent = document.getElementById('modal-details');
        modalContent.innerHTML = `
            <h2>${item.title}</h2>
            <img src="${item.imageUrl}" alt="${item.title}">
            <p>${item.content}</p>
            <img src="${item.details.imageUrl}" alt="${item.title}">
            <p>${item.details.content}</p>
        `;
    }

    function toggleFullScreen() {
        const articlesContainer = document.getElementById('articles');
        const detailsContainer = document.getElementById('details');

        articlesContainer.classList.toggle('hidden');
        detailsContainer.classList.toggle('hidden');
    }