class UI{

static addFilmToUI(newFilm)
{
const filmList=document.getElementById("films");
filmList.innerHTML+=
`

<tr>
    <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
    <td>${newFilm.title}</td>
    <td>${newFilm.director}</td>
    <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
</tr>


`

}
static clearInputs(element1,element2,element3) {
    element1.value="";
    element2.value="";
    element3.value="";
}
static displayMesseage(messeage,type) {
    const cardBody=document.querySelectorAll(".card-body")[0];
        //Alert divi oluşturdum

        const div=document.createElement("div");
        div.className=`àlert alert-${type}`;
        div.textContent=messeage;
        cardBody.appendChild(div);
        setTimeout(function(){
                div.remove();
        },2000);
        
        


}
static loadAllFilms(films){
    const filmList=document.getElementById("films");
    filmList.forEach(function(film){
        filmList.innerHTML+=
        `

<tr>
    <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
    <td>${newFilm.title}</td>
    <td>${newFilm.director}</td>
    <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
</tr>


`
        
    });
}
static deleteFilmFromUI(element) {
    element.parentElement.parentElement.remove();
}
static clearAllFilmsFromUI(){
    const filmList=document.getElementById("films");
    while(filmList.firstElementChild!==null) {
        filmList.firstElementChild.remove();
    }
}

}

