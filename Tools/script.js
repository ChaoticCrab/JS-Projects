(function(){

    "use strict";

    const pTag = document.querySelector('p');
    const button = document.querySelector('button');

    button.addEventListener('click', function(){
        pTag.style.color = "green";
        
    });
})();