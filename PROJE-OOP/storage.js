class Storage{

    static addFilmToStorage(newFilm){
        let films=this.getFilmsFromStorage();
        films.push(newFilm);
        localStorage.setItem("films",JSON.stringify(films)); //KEY İSMİ GÖRÜLEN ilk baş
    
    }
   static getFilmsFromStorage(){
        let films;
    
        if(localStorage.getItem("films")===null){
            films=[];
        }
        else
        {
            films=JSON.parse(localStorage.getItem("films")); //KEY İSMİ
        }
        return;
    
    }
    static deleteFilmFromStorage(filmTitle) {
        let films=this.getFilmsFromStroage();
        films.forEach(function(film,index){
            if(film.title===filmTitle) {
                films.splice(index,1);
            }
        });
        localStorage.setItem("films",JSON.stringify(films));
    }
   static clearAllFilmsFromStorage()
    {
        localStorage.removeItem("films");
    }

}
