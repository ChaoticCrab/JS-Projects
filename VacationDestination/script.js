(function(){
    
    "use strict";

    const detailsForm = document.querySelector('#destination_details_form');

    detailsForm.addEventListener('submit', handleFormSubmit);

    function handleFormSubmit(event) {
        event.preventDefault();

        const destName = event.target.elements['name'].value;
        const destLocation = event.target.elements['location'].value;
        const destPhoto = event.target.elements['photo'].value;
        const destDesc = event.target.elements['description'].value;

        for (let i=0; i < detailsForm.length; i++) {
            detailsForm.elements[i].value = "";
        }

        const destCard = createDestinationCard(destName, destLocation, destPhoto, destDesc);

        const wishListContainer = document.getElementById('destinations_container');

        if (wishListContainer.children.length === 0){
            document.getElementById('title').innerHTML = "My Wish List";
        } 

        document.querySelector('#destinations_container').appendChild(destCard);
    };

    function createDestinationCard(name, location, photo, desc){
        const card = document.createElement('div');
        card.className = 'card';

        const img = document.createElement('img');
        img.setAttribute('alt', name);
            
        const constantPhotoUrl = "images/signpost.jpg";

        if (photo.length === 0){
            img.setAttribute('src', constantPhotoUrl);
        } else {
            img.setAttribute('src', photo);
        }

        card.appendChild(img);

        const cardBody = document.createElement('div');
        cardBody.className = "cardBody";

        const cardTitle = document.createElement('h3');
        cardTitle.innerHTML = name;
        cardBody.appendChild(cardTitle);

        const cardSubtitle = document.createElement('h4');
        cardSubtitle.innerHTML = location;
        cardBody.appendChild(cardSubtitle);

        if (desc.length !== 0){
            const cardDesc = document.createElement('p');
            cardDesc.className = "cardText";
            cardDesc.innerText = desc;
            cardBody.appendChild(cardDesc);
        }

        const cardDeleteBtn = document.createElement("button");
        cardDeleteBtn.innerText = "Remove"

        cardDeleteBtn.addEventListener("click", removeDestination);
        cardBody.appendChild(cardDeleteBtn);

        card.appendChild(cardBody);

        return card;
    };


    function removeDestination(event){
        const card = event.target.parentElement.parentElement;
        card.remove();
    };

})();