document.addEventListener('DOMContentLoaded', function() {  /// это гарантирует, что все элементы DOM доступны для манипуляций
    const menuToggle = document.getElementById('menu-toggle'); // этот код находит элемент  menu-toggle и сохраняет его в переменную
    const menu = document.getElementById('menu');  // этот код находит элемент с идентификатором menu и сохраняет его в переменную 

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('active'); //  если класс active уже есть, он будет удален. Если его нет, он будет добавлен
    });

    const articlesContainer = document.getElementById('articles'); //  этот код находит элемент articles и сохраняет его в переменную 
    const paginationContainer = document.getElementById('pagination'); // этот код находит элемент pagination и сохраняет его в переменную 
    const searchInput = document.getElementById('searchInput');  //  эот код находит элемент searchInput и сохраняет его в переменную 
    const sortButton = document.querySelector('.sort__container-button'); //  этот код находит первый элемент с классом sort__container-button и сохраняет его в переменную 
    const sortDropdown = document.querySelector('.sort__container-dropdown'); // этот код находит первый элемент с классом sort__container-dropdown и сохраняет его в переменную 

    const articlesPerPage = 10; // количество статей на странице
    let currentPage = 1; // этот код определяет переменную currentPage, которая хранит текущий номер страницы
    let articles = [  // статьи
        {   
            id:1,
            title: 'Парк Семья', 
            content: 'На лужайке в нижнекамском парке «Семья» можно поиграть или просто посидеть с семьей и друзьями, На территории парка занятие себе по душе смогут найти дети разного возраста, На входе в парк построен мост, который связан с велосипедной дорожкой, Есть в центральном городском парке Нижнекамска и игровые площадки с качелями, горками и фонтаном, а также спортплощадки для игры в футбол, волейбол и баскетбол, велодорожки, общая протяжённость которых 3,5 км. Можно позаниматься на тренажёрах. Зимой же в парке прокладывают трассу для любителей лыжных прогулок. Зимой здесь заливается каток, на котором можно покататься на коньках. Также для детей строится ледовая горка, где всю зиму детвора катается на ледянках или санках.Нижнекамский парк «Семья» также стал традиционным местом проведения бесплатных дружеских стартов «5 вёрст». Это бег на дистанции 5 км, который проводится каждую субботу с фиксацией времени. Дистанцию можно пробежать или пройти пешком. Участвовать в забеге может любой желающий вне зависимости от возраста и уровня подготовки. Перед каждым стартом проводится небольшой инструктаж новых участников, во время которого рассказывают об особенностях трассы. Под ним есть скамейки, где часто играют уличные музыканты.Далее можно увидеть скульптурную композицию «У меня есть семья» скульптора Фаниля Валиуллина. Здесь установлена скамейка, можно сделать фотографию на память.', 
            image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/40/70/78/yaz-kis-farketmeksizin.jpg?w=1200&h=-1&s=1',
            category: 'parks',
        },
        { 
            id:2,
            title: 'Парк Лемаева', 
            content: 'Парк назван в честь одного из «отцов» Нижнекамска, Большой зелёный сквер славится на весь город, В нём расположен главный фонтан, оснащённый лазерной проекцией, развлекательный клуб, памятники и комфортные лавочки Он рассказывает об истории города и его людях через медиастенды, установленные вдоль центральной аллеи. Главный аттракцион здесь — геометрический световой фонтан. На водную завесу проецируют разные изображения: можно увидеть логотипы ключевых производств города и портреты жителей', 
            image: 'https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_658547213c38410bfd387a36_65854815865a591d8b4249fe/scale_1200',
            category: 'parks'
        },
        { 
            id:3,
            title: 'Парк Тукая', 
            content: 'Единственный в Татарстане парк, посвященный жизни и творчеству татарского писателя, Территория разделена на несколько тематических зон, Первая — для чтения, Здесь тихо: можно устроиться с книгой под березами или поработать — всю территорию парка покрывает бесплатный Wi-Fi, В этой же зоне есть полукруглая сцена для поэтических слэмов и литературных вечеров и стенд-книга, страницы которой заполнены отрывками из биографии Тукая и его основных произведений.Вторая зона — «тукаевское» пространство. Мимо статуй героев сказок и стихов поэта можно пройти к фонтану с фигурой Су Анасы. Рядом — обновленная центральная библиотека с литературным кафе и доступом к аудио- и электронным книгам.Оставшуюся треть парка занимает спортивно-игровая зона с отдельными комплексами для детей разных возрастов.',
            image: 'https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_658547213c38410bfd387a36_658547464266cc7bdb3b7fc8/scale_1200',
            category: 'parks'
        },
        { 
            id:4,
            title: ' Парк «Солнечная поляна»', 
            content: 'Настоящий волшебный мир с потрясающими скульптурными композициями, просторной зелёной территорией, светящимися инсталляциями и памятниками, Общая площадь парка составляет 5,2 гектара, На пяти гектарах собраны все спортивные возможности города: площадки для баскетбола, тенниса, бадминтона, пляжного волейбола, большое футбольное поле с искусственным покрытием, множество турников и перекладин. А важная фишка места в том, что здесь круглый год стоит украшенная новогодняя елка.', 
            image: 'https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_658547213c38410bfd387a36_6585476167f1d170434ff1e2/scale_1200',
            category: 'parks' 
        },
        { 
            id:5,
            title: 'Нижнекамский городской музей', 
            content: 'Наличие ухоженной прогулочной набережной всегда является приятным бонусом, На ней можно отвлечься от суеты и неспешно прогуляться, любуясь плеском волн и шумом Камы.Нижнекамский городской музей был открыт 22 сентября 1976 года в связи с 10-летием города. В новое красивое, отдельно стоящее здание переехал в 2004 г. В настоящее время экспозиционно-выставочные залы занимают площадь 753 кв.м., где представлены различные исторические эпохи', 
            image: 'https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_658547213c38410bfd387a36_65854797c767be610d155ba5/scale_1200',
            category: 'monuments' 
        },
        { 
            id:6,
            title: 'Музей велосипедов', 
            content: 'Где вы ещё сможете посетить столь увлекательный музей? В нём собрана коллекция велосипедов разных временных отрезков, размеров и стилей.На данный момент в музее собрано около сорока раритетных экспонатов: швейцарский военный велосипед середины прошлого века, новенький американский тандем, двухколёсные экземпляры из Риги, несколько легендарных «Салютов», цирковой', 
            image: 'https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_658547213c38410bfd387a36_658547a2eec8b90f65a0af4e/scale_1200',
            category: 'monuments' 
        },
        { 
            id:7,
            title: 'Музей Ахсана Фатхутдинова', 
            content: 'Расположен в окрестностях города, в посёлке Красный Ключ. Музей посвящён трудам известного художника Республики Татарстан Ахсана Саримовича Фатхутдинова.',
            image: 'https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_658547213c38410bfd387a36_658547acbff6e6733682460f/scale_1200',
            category: 'monuments' 
        },
        { 
            id:8,
            title: 'Церковь Воскресения Христова', 
            content: 'Была возведена в 1999 году. Каменный храм искусно расписан художниками с Московской художественной академии имени Сурикова.', 
            image: 'https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_658547213c38410bfd387a36_658547b995509b2d84386fcb/scale_1200',
            category: 'churches' 
        },
        { 
            id:9,
            title: 'Центральная соборная мечеть Джамиг (Нижнекамская Соборная Мечеть)', 
            content: 'Строительство мечети заняло 7 лет и было полностью окончено в 1996 году. «Джамиг» является многоминаретной мечетью, олицетворяющей стиль и убранство 16 века.', 
            image: 'https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_658547213c38410bfd387a36_658547e2f79ef86dc1b85bf6/scale_1200',
            category: 'churches' 
        },
        { 
            id:10,
            title: 'Церковь Романа Сладкопевца (Нижнекамский храм Святого преподобного Романа Сладкопевца)', 
            content: 'Бревенчатый храм построен в 2007 году. Для детей здесь действует воскресная школа, а взрослые находят уединение в стенах культового здания.', 
            image: 'https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_658547213c38410bfd387a36_658547f1226293193067a24b/scale_1200',
            category: 'churches' 
        },
        { 
            id:11,
            title: 'Церковь Покрова Пресвятой Богоматери', 
            content: 'Вблизи города, в посёлке Большое Афанасово, по улице Центральная, дом 61 можно посетить ещё одну прекрасную церковь. Она была построена в 1817 году на месте разрушенного деревянного храма.', 
            image: 'https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_658547213c38410bfd387a36_6585480195509b2d8438f2cd/scale_1200',
            category: 'churches' 
        },
        { 
            id:12,
            title: 'Красноключинская мечеть', 
            content: 'Возведена в 1996 году, а её открытие было приурочено к 30-летию основания Нижнекамска. Находится мечеть рядом с городом, в посёлке Красный Ключ.', 
            image: 'https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_658547213c38410bfd387a36_6585480c67f1d1704350fdaa/scale_1200',
            category: 'churches' 
        },
        { 
            id:13,
            title: 'Парк «Нефтехимиков»', 
            content: 'Зимой здесь заливается большой каток, а летом организовываются мастер-классы и выставки под открытым небом. Спортивные площадки парка и красивая территория так и манят на ежедневные прогулки.', 
            image: 'https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_658547213c38410bfd387a36_6585486e4266cc7bdb3d71de/scale_1200',
            category: 'parks' 
        },
        {   
            id:14,
            title: 'Памятник Н. В. Лемаеву', 
            content: 'Николай Васильевич Лемаев был директором местного нефтехимического комбината и Героем Социалистического Труда. Памятный бюст в его честь установлен в 2001 году, спустя всего год со дня его смерти.', 
            image: 'https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_658547213c38410bfd387a36_6585489e16f1ad2e39f7de84/scale_1200',
            category: 'landmark',
        },
        {   
            id:15,
            title: 'Памятник Г. М. Тукаю', 
            content: 'Бюст известного поэта Габдуллы Мухамедгарифовича Тукая был открыт в 1991 году.Памятник представляет собой бронзовую фигуру Габдуллы Тукая с раскрытой книгой в руке, установленную на высокий постамент из чёрного лабрадорита. Постамент находится на квадратном основании, внизу представляет собой четырёхгранник, постепенно переходящий в восьмигранник', 
            image: 'https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_658547213c38410bfd387a36_658548b139c6e24c8b11d575/scale_1200',
            category: 'landmark',
            mapLink: 'https://www.google.com/maps?q=Семья+Парк'
        },
        {   
            id:16,
            title: 'Памятник «Воинам-интернационалистам»', 
            content: 'Ещё один памятник, напоминающих о трагических потерях солдат и мирных жителей. Мемориал представляет собой присевшего отдохнуть на белый камень солдата с автоматом в руках. Архитектором монумента является Фирдавис Ханов, художником — Владимир Махмутов', 
            image: 'https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_658547213c38410bfd387a36_658548cb67f1d1704352224f/scale_1200',
            category: 'landmark',
            mapLink: 'https://www.google.com/maps?q=Семья+Парк'
        },
        {   
            id:17,
            title: 'Памятник М. М. Джалилю', 
            content: 'Муса Мустафович Джалилов был татарским поэтом и Героем Советского Союза.Гранитная площадка трапециевидной формы, приподнятая над уровнем земли, упорядочивает неровный рельеф площади с большим перепадом высоты. В центре располагается цветник, в уменьшенном виде повторяющий конфигурацию площадки. По боковым сторонам поставлены скамьи из полированного гранит', 
            image: 'https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_658547213c38410bfd387a36_658548d6a4afb845b11c7efd/scale_1200',
            category: 'landmark',
            mapLink: 'https://www.google.com/maps?q=Семья+Парк'
        },
        {   
            id:18,
            title: 'Памятник «Бездомным животным»', 
            content: 'Этот трогательный памятник является одновременно и скульптурой, и копилкой. Все собранные в нём средства идут в фонд помощи бездомным животным.', 
            image: 'https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_658547213c38410bfd387a36_658548e792a5031d82564fa8/scale_1200',
            category: 'landmark',
            mapLink: 'https://www.google.com/maps?q=Семья+Парк'
        },
        {   
            id:19,
            title: 'Памятник Е. Н. Королёву', 
            content: 'Евгений Никифорович Королёв был начальником стройки города Нижнекамска и Героем Социалистического Труда. Памятник в его честь установили в 2002 году.', 
            image: 'https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_658547213c38410bfd387a36_658548ee16f1ad2e39f85bf7/scale_1200',
            category: 'landmark',
            mapLink: 'https://www.google.com/maps?q=Семья+Парк'
        },
        {   
            id:20,
            title: 'Стела «Космонавтам»', 
            content: 'Представляет собой две ракеты, взмывающие ввысь. Что символично, стела установлена на улице, названной в честь Юрия Гагарина.', 
            image: 'https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_658547213c38410bfd387a36_658548ffeb35721ecb5a7410/scale_1200',
            category: 'landmark',
            mapLink: 'https://www.google.com/maps?q=Семья+Парк'
        },
        {   
            id:21,
            title: 'Памятник «Первостроителям»', 
            content: 'Размещён в 1996 году на месте остановки санно-тракторного поезда в декабре 1990 года.Арт-объект из девяти бронзовых фигур был открыт в 2021 году в честь 55-летия города. В композиции представлены образы людей основных профессий, задействованных в строительстве Нижнекамска: геодезиста, сварщика, каменщика, проектировщика, архитектора, механизатора и штукатура-маляра. Также в скульптуре есть фигуры девушек, чтобы подчеркнуть значимость женского труда на масштабной стройке', 
            image: 'https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_658547213c38410bfd387a36_6585490992a5031d82568bfa/scale_1200',
            category: 'landmark',
            mapLink: 'https://www.google.com/maps?q=Семья+Парк'
        },
        {   
            id:22,
            title: 'Памятник «Ликвидаторам последствий аварии на Чернобыльской АЭС»', 
            content: 'Возведён в памятном сквере, вдоль улицы Спортивная.Тридцать четыре года назад произошла авария на Чернобыльской АЭС. Это была крупнейшая техногенная и гуманитарная катастрофа двадцатого века, истинные масштабы которой неизвестны до сих пор. Только в России воздействию радиации в той или иной степени подверглись свыше трех миллионов человек', 
            image: 'https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_658547213c38410bfd387a36_65854916cf03b714f2f2e474/scale_1200',
            category: 'landmark',
            mapLink: 'https://www.google.com/maps?q=Семья+Парк+Нижнекамск'
        },
    ];

    function displayArticles(page, filteredArticles) {
    // очищаем контейнер статей
    articlesContainer.innerHTML = '';

    // ыычисляем начальные и конечные индексы для текущей страницы
    const start = (page - 1) * articlesPerPage;
    const end = start + articlesPerPage;

    // получаем статьи для текущей страницы
    const pageArticles = filteredArticles.slice(start, end);

    // проходим по каждой статье и создаем HTML-элементы для отображения
    pageArticles.forEach(article => {
        const articleDiv = document.createElement('div'); // создается контейнер div для каждой статьи с классом article
        articleDiv.classList.add('article');

        const title = document.createElement('h2'); // создается заголовок h2 с классом article__title и текстом, равным article.title
        title.classList.add('article__title');
        title.textContent = article.title;

        const contentBeforeImage = document.createElement('p'); // Создается абзац p с первыми двумя фразами из article.content
        contentBeforeImage.textContent = article.content.split('.').slice(0, 1).join('. ') + '.'; // Первые две фразы

        const image = document.createElement('img'); // создается изображение img с классом article__image 
        image.classList.add('article__image');
        image.src = article.image;
        image.alt = article.title;

        const contentAfterImage = document.createElement('p');
        contentAfterImage.textContent = article.content.split('.').slice(1).join('. ') + '.'; // остальные фразы

        articleDiv.appendChild(title);
        articleDiv.appendChild(contentBeforeImage);
        articleDiv.appendChild(image);
        articleDiv.appendChild(contentAfterImage);
        articlesContainer.appendChild(articleDiv); // все элементы добавляются в контейнер статьи а затем контейнер статьи добавляется в articlesContainer
    });
}

    // функция для отображения пагинации
    function displayPagination(filteredArticles) {
        paginationContainer.innerHTML = '';
        const pageCount = Math.ceil(filteredArticles.length / articlesPerPage);

        for (let i = 1; i <= pageCount; i++) {
            const li = document.createElement('li'); // создается элемент li с классом pagination__item
            li.classList.add('pagination__item');
            const a = document.createElement('a'); // создается элемент<a с классом pagination__link, href равным # и текстом, равным номеру страницы i
            a.classList.add('pagination__link');
            a.href = '#';
            a.textContent = i;
            if (i === currentPage) {    // если номер страницы i совпадает с текущей страницей currentPage, добавляется класс pagination__item--active к элементу, чтобы выделить текущую страницу
                li.classList.add('pagination__item--active');
            }
            a.addEventListener('click', function(e) { // добавляется обработчик события click к элементу <a>, который
                e.preventDefault(); // предотвращает стандартное поведение ссылки (e.preventDefault())
                currentPage = i; // обновляет текущую страницу currentPage на i
                displayArticles(currentPage, filteredArticles); // ызывает функцию displayArticles для отображения статей на новой странице
                displayPagination(filteredArticles); 
            });
            li.appendChild(a); // <li> добавляется в paginationContainer
            paginationContainer.appendChild(li);
        }
    }

    // функция для фильтрации статей
    function filterArticles(query) { // функция проверяет каждую статью article в массиве
        return articles.filter(article => {
            return article.title.toLowerCase().includes(query) || article.content.toLowerCase().includes(query); // Преобразует article.title и article.content в нижний регистр с помощью метода toLowerCase()
        });
    }

    // функция для фильтрации статей по категории
    function filterArticlesByCategory(category) {
        const categoryIds = {
            parks: [1, 2, 3, 4, 13],   // 1, 2, 3, 4, 13 статьи про парки
            monuments: [5, 6, 7], 
            churches: [8, 9, 10, 11, 12],
            landmark: [14, 15, 16, 17, 18, 19, 20, 21, 22]
        }; 

        return articles.filter(article => {
            return categoryIds[category].includes(article.id);
        });
    }

    // для поиска
    searchInput.addEventListener('input', function() {
    const query = searchInput.value.toLowerCase();  // получаем значение поля ввода поиска и приводим его к нижнему регистру
    const filteredArticles = filterArticles(query);    // фильтруем статьи на основе поискового запроса
    currentPage = 1;  // сбрасываем текущую страницу на первую при новом поиске
    displayArticles(currentPage, filteredArticles);      // отображаем отфильтрованные статьи на первой странице
    displayPagination(filteredArticles);     // отображаем пагинацию для отфильтрованных статей
});

    // для кнопки сортировки
    sortButton.addEventListener('click', function(event) {
        event.stopPropagation(); // предотвращаем всплытие события
        sortDropdown.classList.toggle('sort__container-dropdown--show');
    });

    // закрытие выпадающего списка при клике вне его
    window.addEventListener('click', function(event) {
        if (!event.target.matches('.sort__container-button')) {
            var dropdowns = document.getElementsByClassName("sort__container-dropdown");
            for (var i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('sort__container-dropdown--show')) {
                    openDropdown.classList.remove('sort__container-dropdown--show');
                }
            }
        }
    });

    //  для ссылок сортировки
    document.querySelectorAll('.sort__container-link').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const order = this.getAttribute('data-order');
            const category = this.getAttribute('data-category');
            if (order) {
                sortItems(order);
            } else if (category) {
                filterByCategory(category);
            }
        });
    });

    // функция для сортировки элементов
    function sortItems(order) {
        if (order === 'asc') {
            articles.sort((a, b) => a.title.localeCompare(b.title));
        } else if (order === 'desc') {
            articles.sort((a, b) => b.title.localeCompare(a.title));
        }
        currentPage = 1; // сбрасываем на первую страницу при сортировке
        displayArticles(currentPage, articles);
        displayPagination(articles);
        sortDropdown.classList.remove('sort__container-dropdown--show'); // скрываем выпадающий список после сортировки
    }

    // функция для фильтрации по категории
    function filterByCategory(category) {
    const filteredArticles = filterArticlesByCategory(category);  // фильтруем статьи по выбранной категории
    currentPage = 1;      // сбрасываем текущую страницу на первую при фильтрации
    displayArticles(currentPage, filteredArticles);      // отображаем отфильтрованные статьи на первой странице
    displayPagination(filteredArticles);    // Отображаем пагинацию для отфильтрованных статей
    sortDropdown.classList.remove('sort__container-dropdown--show');    // Скрываем выпадающий список после фильтрации
    localStorage.setItem('lastCategory', category);     // cохраняем выбранную категорию в localStorage
}

    // Инициализация
    const lastCategory = localStorage.getItem('lastCategory');
    if (lastCategory) {
        filterByCategory(lastCategory);
    } else {
        displayArticles(currentPage, articles);
        displayPagination(articles);
    }
});

