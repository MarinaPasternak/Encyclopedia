import data from '../data.js'

export default class Article {

    constructor(id) {
        this.pageID = id;
      }

    createPage() {
        let articleData = data.find((article) => article.id === Number(this.pageID));

        let mainApp = document.getElementById('app');
        let title = document.createElement('h2');
        let hr = document.createElement('hr');
        let about = document.createElement('div');
        let img = document.createElement('img');
        let divContent = document.createElement('div');

        mainApp.innerHTML = '';

        title.innerHTML =  articleData.title;
        img.src = articleData.imgSRC;
        about.innerHTML = articleData.text;
        divContent.className = 'article-content d-flex';

        mainApp.appendChild(title);
        mainApp.appendChild(hr);
        divContent.appendChild(img);
        divContent.appendChild(about);
        mainApp.appendChild(divContent);
       
    }

}