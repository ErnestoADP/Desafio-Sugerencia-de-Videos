class Multimedia {
    constructor(url) {
        let _url = url;
        this.getUrl = () => _url;
        this.setUrl = (newUrl) => _nombre = newUrl;
    }
    get url() {
        return this.getUrl();
    }

    set url(newUrl) {
        this.setUrl(newUrl);
    }


    setInicio() {
        console.log('Este método es para realizar un cambio en la URL del video.');
    }
}

/**--------------------------------------------------------------------------------*/
class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        let _id = id;
        this.getId = () => _id;
        this.setId = (newId) => _id = newId;
    }

    get id() {
        return this.getId()
    }

    set id(newId) {
        this.setId(newId);
    }

    playMultimedia() {
        setIframe.responseSetIframePrivateFunction(this.getUrl(), this.getId());
    }

    setInicio(timeVideo) {
        const iframeElement = document.getElementById(this.getId());
        iframeElement.setAttribute('src', `${this.getUrl()}?start=${timeVideo}`);
    }
}

/**--------------------------------------------------------------------------------------*/
const setIframe = (() => {
    const modificarFrame = (newUrl, newId) => {
        const iframeElement = document.getElementById(newId);
        iframeElement.setAttribute('src', newUrl);
    }
    return {
        responseSetIframePrivateFunction: modificarFrame,
    }
})();

/**--------------------------------MUSICA-------------------------------------------------------------------------*/
const reproductorMusica = new Reproductor('https://www.youtube.com/embed/UbQgXeY_zi4', 'musica');
reproductorMusica.playMultimedia();
reproductorMusica.setInicio('60');

/**------------------------------------PELICULA-------------------------------------------------------------*/
const reproductorPeliculas = new Reproductor('https://www.youtube.com/embed/uW-6yDYDB1k', 'peliculas');
reproductorPeliculas.playMultimedia();
reproductorPeliculas.setInicio('9');

/**--------------------------------------SERIES----------------------------------------------------------------*/
const reproductorSeries = new Reproductor('https://www.youtube.com/embed/Vlutwk2GspA', 'series');
reproductorSeries.playMultimedia();
reproductorSeries.setInicio('73');