const form=document.getElementById("film-form");
const titleElement=document.querySelector("#title");
const directorElement=document.querySelector("#director");
const urlElement=document.querySelector("#url");
const Cardbody=document.querySelectorAll(".card-body")[1];
const clear=document.getElementById("clear-films");
const find = document.getElementById("find");



//Tüm eventleri yükleme
eventListeners();

function eventListeners(){
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films =Storage.getFilmsFromStorage();
        UI.loadAllFilms(films);

    });
    Cardbody.addEventListener("click",deleteFilm);
    clear.addEventListener("click",clearAllFilms);
}

function addFilm(e){
    const title=titleElement.value;
    const director=directorElement.value;
    const url=urlElement.value;

        if(title === "" || director === "" || url === "")
        {
                UI.displayMesseage("Tüm Alanları doldurun..!","danger");
        }
        

            else {
                //Yeni Film
                const newFilm=new Film(title,director,url);
                UI.addFilmToUI(newFilm);//Arayüze Film ekleme
                Storage.addFilmToStorage(newFilm); //Storage'a film ekleme
                UI.displayMesseage("Film başarıyla eklendi...","success");
                

            }
            UI.clearInputs(title,director,url);
            e.preventdefault()
}
function deleteFilm(e){
    if(e.target.id==="delete-film") {
        UI.deleteFilmFromUI(e.target);
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling);
        UI.displayMesseage("Silme İşlemi Başarılı...","success");
    }
}
function clearAllFilms(){
    if(confirm("Emin misiniz ?")) {
        UI.clearAllFilmsFromUI();
        Storage.clearAllFilmsFromStorage();
    }
  
}