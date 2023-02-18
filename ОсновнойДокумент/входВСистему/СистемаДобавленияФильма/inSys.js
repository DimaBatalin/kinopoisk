console.log("hellow")

const fieldAll = document.querySelectorAll('.fieled')

const url = `http://192.168.1.21:5000` 

const UrlPreview = document.querySelector(".UrlPreview")

async function AddFilm() {

    console.log(fieldAll);
    try {
        const response = await axios.post(`${url}/film/create`, {
            posterUrlPreview: fieldAll[0].value, 
            nameRu: fieldAll[1].value, 
            nameOriginal: fieldAll[2].value,
            countries: fieldAll[3].value,
            description: fieldAll[4].value,
            endYear: fieldAll[5].value,
            genres: fieldAll[6].value,
            ratingKinopoisk: fieldAll[7].value,
            type: fieldAll[8].value,
        })
        clearFied()
    } 
    catch (error) {
       console.log(error); 
    }
    

}

visualPoster = () => {
    console.log(UrlPreview);

    const posterUrl = document.querySelector("#poster").value
    console.log(posterUrl); 
    
    UrlPreview.src = posterUrl
}

clearFied = () => {
    for (let i = 0; i < fieldAll.length; i++) {
        fieldAll[i].value = ``
    }
    UrlPreview.src = ''
}

async function AllFilms() {
    const filmsDiv = document.getElementById('films')
    try {
        const response = await axios.get(`${url}/film/show`, {})
    
        const ArrFilms = response.data.message
        console.log(ArrFilms);
        filmsDiv.innerHTML = ``
        for (let i = 0; i < ArrFilms.length; i++) {
            filmsDiv.innerHTML += `<div>${ArrFilms[i].kinopoiskId}
                <div>${ArrFilms[i].posterUrlPreview}</div>
                <button class="deletedFilm" onclick="DelFilm(${ArrFilms[i].kinopoiskId})">Удалить фильм</button>
            </div>`
            
        }
    } 
    catch (error) {
        console.log(error);
    }

}
async function DelFilm(kinopoiskId) {
    try {
        const response = await axios.post(`${url}/film/remove`, {
            kinopoiskId: kinopoiskId,
        })
        AllFilms()
    } 
    catch (error) {
        console.log(error);
    }
}