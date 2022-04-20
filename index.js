var text = '';
function findCovid() {
    text = document.getElementById('covid-search').value;
    connectCovid(text)
    connectCountry(text)
}


function connectCovid(text) {
    fetch(`https://api.covid19api.com/live/country/${text}`)
        .then(res => res.json())
        .then(data => loadCovid(data));

}

connectCovid();

function loadCovid(data) {

    console.table(data.ID[0]);

    var container = document.getElementById('main-container');

    var p1 = data.ID[0].Confirmed;
    var p2 = data.ID[0].Deaths;
    var p3  = data.ID[0].Recovered;



    container.innerHTML = `<p><b> ${p1} </b></p>
                           <p><b> ${p2} </b></p>
                           <p><b> ${p3} </b></p>`;



    container.appendChild(newDiv);

}


function connectCountry(text) {
    fetch(`https://restcountries.com/v3.1/${text}`)
        .then(res => res.json())
        .then(data => loadCountry(data));

}

connectCountry();


function loadCountry(data){
    console.log(data[0]);
    var container = document.getElementById("counties-container")
    
 
     
     container.innerHTML = `
                         <img src='${data[0].flags.png}' >
                         <p>Population:<b> ${data[0].population}</b></p>
                         <p>Capital: ${data[0].capital}</p>`
                         
 
     container.appendChild(newDiv);
    }