import Topics from './rubrication/index.js';
import MainPage from './main_page/index.js';
import Contents from './articles_catalog/index.js';
import ModalWindow from './random_article/index.js';
import Article from './article/index.js';
import data from './data.js';

(function () {
    let mainApp = document.getElementById('app');
    const newTopicPage = new Topics();
    const newMainPage = new MainPage();
    const newContentsPage = new Contents();
    const newModalWindow = new ModalWindow();

    const topicsPage = document.getElementById('topicsPage')
                        .addEventListener('click', function() {
                            mainApp.innerHTML = '';
                            newTopicPage.createTopic();
                            addAdcardion();
                    });
    
    const mainPage = document.getElementById('mainPage')
                        .addEventListener('click', function() {
                            mainApp.innerHTML = '';
                            newMainPage.createPage();
    });

    const contentsPage = document.getElementById('contentsPage')
                        .addEventListener('click', function() {
                            mainApp.innerHTML = '';
                            newContentsPage.createPage();
    });

    const randomPage = document.getElementById('randomArticle')
                        .addEventListener('click', function() {
                            newModalWindow.createModalWindow();
    });

    let allTitles = [];
                            
    function addAdcardion () {
        let acc = document.getElementsByClassName('accordion');
        let i;

        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener('click', function() {
                this.classList.toggle('active');
                let panel = this.nextElementSibling;
                if (panel.style.display === 'block') {
                    panel.style.display = 'none';
                } else {
                    panel.style.display = 'block';
                }
            });
        }
    }

    function getAllTitles() {
        for (let index in data) {
            if (!allTitles.includes(data[index].title.toLowerCase())) {
                allTitles.push(data[index].title);
            }
          }
    }

    function createdataList(array) {
        let datalist = document.getElementById('titles');
        let searchValue = document.getElementById('searchInput').value;
        console.log(searchValue);

        if( array.length>0 ) {
            for (let i in array) {
                const option = document.createElement('option');
                option.innerHTML = array[i];
                datalist.appendChild(option);
            }
        } 
        else if (searchValue.length === 0) {
            for (let i in allTitles) {
                const option = document.createElement('option');
                option.innerHTML = allTitles[i];
                datalist.appendChild(option);
            }
        }
        else {
            const option = document.createElement('option');
            option.innerHTML = 'Nothing has found';
            datalist.appendChild(option);
        }
        
    }

    document.getElementById('searchInput').onchange = function () {
        const searchValue = this.value;
        document.getElementById('titles').innerHTML = '';
        
        let allMatches = [];
        const regExp = new RegExp('searchValue');
        if (searchValue.length > 0) {
            for(let i in allTitles) {
                if (regExp.test(allTitles[i])) {
                    allMatches.push(allTitles[i]);
                }
            }
        }
        createdataList(allMatches);
    };

    document.getElementById('basic-addon1').onclick = function () {
        let searchValue = document.getElementById('searchInput').value;
        const articleId =  data.find((article) => article.title === searchValue);
        const article = new Article(articleId.id);
        article.createPage();
    };

    function WorkOnLoad() {
        newMainPage.createPage();
        getAllTitles();
        createdataList(allTitles);
    }
    document.addEventListener('DOMContentLoaded',WorkOnLoad);
})();