const detailsForm = document.querySelector('#destination_details_form');

detailsForm.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
    event.preventDefault();

    let destName = event.target.elements['name'].value;
    let destLocation = event.target.elements['location'].value;
    let destPhoto = event.target.elements['photo'].value;
    let destDesc = event.target.elements['description'].value;

    for (var i=0; i < detailsForm.length; i++) {
        detailsForm.elements[i].value = "";
    }

    let destCard = createDestinationCard(destName, destLocation, destPhoto, destDesc);

    let wishListContainer = document.getElementById('destinations_container');

    if (wishListContainer.children.length === 0){
        document.getElementById('title').innerHTML = "My Wish List";
    } 

    document.querySelector('#destinations_container').appendChild(destCard);
};

function createDestinationCard(name, location, photo, desc){
    let card = document.createElement('div');
    card.className = 'card';

    let img = document.createElement('img');
    img.setAttribute('alt', name);
        
    let constantPhotoUrl = "images/signpost.jpg";

    if (photo.length === 0){
        img.setAttribute('src', constantPhotoUrl);
    } else {
        img.setAttribute('src', photo);
    }

    card.appendChild(img);

    let cardBody = document.createElement('div');
    cardBody.className = "cardBody";

    let cardTitle = document.createElement('h3');
    cardTitle.innerHTML = name;
    cardBody.appendChild(cardTitle);

    let cardSubtitle = document.createElement('h4');
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
