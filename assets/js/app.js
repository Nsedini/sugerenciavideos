class Multimedia {
    constructor(url) {
    this._url = url;
}

get url() {
    return this._url
}

setInicio() {
    console.log("Este metodo es para realizar un cambio en la url")
    }
}

class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url)
        this.id = id;
    }

setInicio() {

}

playMultimedia() {

    }
}

//////////////////////////////////////////////////////////////////////////////////////////

const iframeMusica = document.querySelector("#musica");
const iframePelicula = document.querySelector("#pelicula");
const iframeSerie = document.querySelector("#serie");



