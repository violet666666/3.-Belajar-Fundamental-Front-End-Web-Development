import './song-item.js';

class SongList extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    set songs(songs) {
        this._songs = songs;
        this.render();
    }

    renderError(message) {
        this.shadowDOM.innerHTML = `
       <style>
           .placeholder {
               font-weight: lighter;
               color: rgba(0,0,0,0.5);
               -webkit-user-select: none;
               -moz-user-select: none;
               -ms-user-select: none;
               user-select: none;
           }
       </style>
       `;
        this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }

    render() {
        this.shadowDOM.innerHTML = "";
        this._songs.forEach(song => {
            const songItemElement = document.createElement("song-item");
            songItemElement.song = song
            this.shadowDOM.appendChild(songItemElement);
        })
    }
}

customElements.define("song-list", SongList);