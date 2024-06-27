(function(){
    'use strict';
    document.getElementById('convert').addEventListener('submit', function(event){

        event.preventDefault();
        const distance = parseFloat(document.getElementById('distance').value);
        const answer = document.getElementById('answer');

        if (distance) {
            //let roundedConversion = (Math.round(conversion * 1000))/1000;
            //let roundedConversion = conversion.toFixed(3);
            const conversion = (distance * 1.609344).toFixed(3);
            answer.innerHTML = `<h2>${distance} miles converts to ${conversion} kilometers</h2>`;
        } else {
            answer.innerHTML = '<h2>Please provide a number</h2>'
        };
    });
})();