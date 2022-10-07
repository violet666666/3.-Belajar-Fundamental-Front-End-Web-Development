class SongItem extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    set song(song) {
        this._song = song;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                :host {
                    display: block;
                    margin-bottom: 18px;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                    border-radius: 10px;
                    overflow: hidden;
                }
               
                .fan-art-song {
                    width: 100%;
                    max-height: 300px;
                    object-fit: cover;
                    object-position: center;
                }
               
                .song-info {
                    padding: 24px;
                }
               
                .song-info > h2 {
                    font-weight: lighter;
                }
               
                .song-info > p {
                    margin-top: 10px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 10; /* number of lines to show */
                }
            </style>
            <img class="fan-art-song" src="${this._song.artworkUrl100}" alt="Fan Art">
            <div class="song-info">
                <h2>${this._song.artistName}</h2>
                <b><p>${this._song.trackName}</p></b>
                <p>${this._song.collectionName}</p>
                <p>${this._song.trackViewUrl}</p>
            </div>`;
    }
}

customElements.define("song-item", SongItem);