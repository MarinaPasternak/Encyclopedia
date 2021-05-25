export default class MainPage {
    createPage() {
        let mainApp = document.getElementById('app');
        let title = document.createElement('h2');
        let hr = document.createElement('hr');
        let about = document.createElement('div');


        title.innerHTML = 'My encyclopedia';
        about.innerHTML = `
                The Adonis blue (Polyommatus bellargus) is a butterfly in 
                the family Lycaenidae found in Europe and parts of West Asia. 
                This photograph shows the underside of the folded wings of a 
                male, the upper side being a bright, sky-blue; 
                the photograph was taken in a chalk meadow at 
                Yoesden Bank in Buckinghamshire, England.
        `;

        mainApp.appendChild(title);
        mainApp.appendChild(hr);
        mainApp.appendChild(about);

     }

}