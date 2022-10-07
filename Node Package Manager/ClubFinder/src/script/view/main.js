import '../component/song-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';


const main = () => {
    const searchElement = document.querySelector("search-bar");
    const songListElement = document.querySelector("song-list");

    const onButtonSearchClicked = async() => {
        try {
            const result = await DataSource.searchSong(searchElement.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    };

    const renderResult = results => {
        songListElement.songs = results;
    };

    const fallbackResult = message => {
        songListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;