import data from '../data.js';
import Article from '../article/index.js';

export default class Topics {
    filter() {
        const topics = [];
        for (let index in data) {
            if (!topics.includes(data[index].topic.toLowerCase())) {
                topics.push(data[index].topic);
            }
          }

        return topics;
    }

    createTopic() {
        let mainApp = document.getElementById('app');
        let nameTopics = this.filter();


        for (let i in nameTopics) {
            let topic = document.createElement('button');
            let articlesBlock = document.createElement('div');
            
            topic.className = 'accordion';
            topic.innerHTML = nameTopics[i];

            articlesBlock.className = 'topic';

            for (let j in data) {
                if (data[j].topic === nameTopics[i]) {
                    
                    let figure = document.createElement('figure');
                    let figcaption = document.createElement('figcaption');
                    let img = document.createElement('img');

                    img.src = './img/document.png';
                    img.setAttribute('articleID',  data[j].id);
                    figcaption.innerHTML = data[j].title;
                    figure.appendChild(img);
                    figure.appendChild(figcaption);

                    articlesBlock.appendChild(figure);

                }
            }
            
            mainApp.appendChild(topic);
            mainApp.appendChild(articlesBlock);

            this.openArticle();
        }
        
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