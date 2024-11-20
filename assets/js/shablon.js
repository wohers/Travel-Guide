const articleId = getParam('id');
const loader = document.getElementById('loader');
loader.style.display = 'flex'
fetch(`https://67322e8b2a1b1a4ae10f29a6.mockapi.io/guide/v1/articles/${articleId}`)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Error occurred');
        }
        return response.json();
    })
    .then(article => {
        displayArticleDetails(article);
        loader.style.display = 'none'
    })
    .catch((err) => {
        console.log(err);
    });

function getParam(name) {
    const UrlParam = new URLSearchParams(window.location.search);
    return UrlParam.get(name);
}

function displayArticleDetails(article) {
    const articleDetails = document.getElementById('articleDetails');
    articleDetails.innerHTML = `
        <h1>${article.title}</h1>
        <img src="${article.imageUrl}" alt="${article.title}">
        <p>${article.content}</p>
        <img src="${article.imageUrl2}" alt="${article.title}">
        <p>${article.content2}</p>
    `;
    document.title = article.title

    const mapUrl = `https://maps.google.com/maps?q=${article.latitude},${article.longitude}&z=15&output=embed`;
    const map = document.createElement('iframe');
    map.src = mapUrl;
    map.width = '100%';
    map.height = '600';
    map.style.border = '0';
    articleDetails.appendChild(map);
}