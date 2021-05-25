import data from '../data.js'
import Article from '../article/index.js';

export default class Contents {
    createPage() {
        let mainApp = document.getElementById('app');
        let allArticles = document.createElement('div');

        allArticles.className = 'all-articles d-flex';

        for (let j in data) { 
            let figure = document.createElement('figure');
            let figcaption = document.createElement('figcaption');
            let img = document.createElement('img');

            img.src = './img/document.png';
            figcaption.innerHTML = data[j].title;
            img.setAttribute('articleID',  data[j].id);
            figure.appendChild(img);
            figure.appendChild(figcaption);

            allArticles.appendChild(figure);
        }

        mainApp.appendChild(allArticles);
        this.openArticle();
     }

     openArticle() {
        let allIMG = document.querySelectorAll('#app img');
        for (let i = 0 ; i < allIMG.length; i++) {
            allIMG[i].onclick = function() {
                let newArticle = new Article(this.getAttribute('articleID'));
                newArticle.createPage();
            };
        }
    }

}