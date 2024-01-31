//search bar with suggestion and image filter//
let suggestion = [
    'Angeles, Allen Dave',
    'Anyayahan, Danica W.',
    'Arnedo, Lorence Miguel S.',
    'Aspan, Jan Russell',
    'Baclayo, Joseph',
    'Bagaporo, Franco Jay S.',
    'Bagnas, Adrian Neil',
    'Barizo, Gerwin',
    'Buclares, Rhanel Stephen S.',
    'Casim, Danilo Jr. B.',
    'Dejamco, Jade V.',
    'Diculen, Addyson',
    'Herico, Alessandra S.',
    'Kadusale, Lesh Lee L.',
    'Mantilla, John A.',
    'Perez, Katrina Mae M.',
    'Pitcheller, Jerlyn Joy',
    'Ramirez, Jason',
    'Respicio, Mark Lanvin',
    'Saavedra, Ryan',
    'Tadas, Miles Ian J.',
    'Tenerife, Mariu Kristian C.',
    'Vijungco, Aljon G.',
    'Zaragoza, Chelsea Franzine C.',
];

const resultsBox = document.querySelector('.result-box');
const inputBox = document.querySelector('#input-box');
const images = document.querySelectorAll('.ybimage');
const search = document.getElementById('search-btn')

inputBox.addEventListener("keyup", e =>{
    if(e.key == "Enter"){
        searchImage();
    }
});

search.addEventListener('click', searchImage);
function searchImage(){
    let searchValue = inputBox.value,
        value = searchValue.toLowerCase();
        images.forEach(image =>{
            if(image.dataset.name.includes(value)){
                return image.style.display = "block";
            }
            image.style.display = "none"
        });
    };

inputBox.addEventListener("keyup", () =>{
    if(search.value != "") return;
    images.forEach(image =>{
        image.style.display = "block";
    });
});

inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = suggestion.filter((keyword) => {
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result)
    }
    display(result)
    if(!result.length){
        resultsBox.innerHTML = '';
    }
}
function display(result){
    const content = result.map((list) => {
        return "<li onclick=selectInput(this)>" + list + "</li>";
    });

    resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}
function selectInput(list){
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML = '';
}

//gradpic pop-up image//

document.querySelectorAll('.ybimage-container img').forEach(image =>{
    image.onclick = () =>{
        document.querySelector('.ybpop-up').style.display = 'block';
        document.querySelector('.ybpop-up img').src = image.getAttribute('src');
    }
});
document.querySelector('.ybpop-up span').onclick = () =>{
    document.querySelector('.ybpop-up').style.display = 'none';
}

