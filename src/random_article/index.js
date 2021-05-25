import data from '../data.js';
import Article from '../article/index.js';

export default class ModalWindow {
    createModalWindow() {
        const randomNum = Math.floor(Math.random() * data.length); 
        const randomArticle =  data.find((article) => article.id === Number(randomNum));

        let foundModal = document.getElementById('modalWindow');
        foundModal.innerHTML = '';

        let divContent = document.createElement('div');
        let title = document.createElement('h1');
        let text = document.createElement('p');


        title.innerHTML = randomArticle.title;
        text.innerHTML = randomArticle.text;


        divContent.className = 'modal-window-content';
        divContent.appendChild(title);
        divContent.appendChild(text);

        let buttonsBlock = document.createElement('div');
        let cancel = document.createElement('button');
        let goToBlock = document.createElement('button');

        cancel.className ='cancel';
        goToBlock.className = 'go-to-page';

        cancel.onclick = function () {
            document.getElementById('modalWindow').style.display = 'none';
        };

        cancel.innerHTML = 'Close';
        goToBlock.innerHTML = 'Go  to article';
        buttonsBlock.appendChild(goToBlock);
        buttonsBlock.appendChild(cancel);

        foundModal.appendChild(divContent);
        foundModal.appendChild(buttonsBlock);

        document.getElementById('modalWindow').style.display = 'block';

        this.openArticle(randomArticle.id);
    }

    openArticle(id) {
        let button = document.querySelector('.go-to-page');
        button.onclick = function() {
            document.getElementById('modalWindow').style.display = 'none';
            let newArticle = new Article(id);
            newArticle.createPage();
        };

    }

}