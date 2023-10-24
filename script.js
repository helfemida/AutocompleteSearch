let a = [];
const listElement = document.querySelector('#auto-list');
const inputElement = document.querySelector('#input');


function fetchSearch(){
    fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
        a = data.map(x => x.name.common);
        a.sort();
        load(a, listElement);
    });
}
function load(data, element){
    if(data){
        element.innerHTML = "";
        let innerElement = "";
        data.forEach((item) => {
            innerElement += `
            <li>${item}</li>`;
        });
        element.innerHTML = innerElement;
    }
}

function filterData (data, seachText){
    return data.filter((x) => x.toLowerCase().includes(seachText.toLowerCase()));
}

fetchSearch();

inputElement.addEventListener("input", function() {

    const filteredData = filterData(a, inputElement.value );
    load(filteredData, listElement);
});