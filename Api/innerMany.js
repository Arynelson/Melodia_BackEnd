import {artistArray} from  "../../FrontEnd- Melodia/src/assets/database/artists.js";    // Importando o array de artistas
import {songsArray} from  "../../FrontEnd- Melodia/src/assets/database/songs.js";
import { db } from  "../../BackEnd/Api/connect.js"; 
const newArtistArray = artistArray.map((currentArtistObj) => {
    const newArtistObj = {...currentArtistObj};
    delete  newArtistObj.id;

    return newArtistObj;

});

const newSongsArray = songsArray.map((currentSongObj) => {
    const newSongObj = {...currentSongObj};
    delete  newSongObj.id;

    return newSongObj;

});

const responseSongs =await db.collection('Songs').insertMany(newSongsArray);
const responseArtists =await db.collection('Artists').insertMany(newArtistArray);

console.log(responseArtists);
console.log(responseSongs);
