import {readFileSync} from 'fs';
import path from 'path';

const readDataFromDB = () => {
    const __dirname = path.resolve();
    const data = readFileSync(path.join(__dirname, 'data.json')).toString();
    return JSON.parse(data);
};

export const createMovie = () => {
    return {
        title: 'El Padrino',
        image: 'https://www.cineytele.com/wp-content/uploads/2018/06/el_padrino_poster.jpg',
        rate: 9.5 
    };
}

export const getMovies = () => {
    return readDataFromDB();
}

export const getMovie = (id = 0) => {
    return {
        title: 'El Padrino',
        image: 'https://www.cineytele.com/wp-content/uploads/2018/06/el_padrino_poster.jpg',
        rate: 9.5 
    };
}

export const updateMovie = (id = 0, movie) => {
    return {
        title: 'El Padrino',
        image: 'https://www.cineytele.com/wp-content/uploads/2018/06/el_padrino_poster.jpg',
        rate: 9.5 
    };
}

export const deleteMovie = (id = 0) => {
    return {
       ok: true
    };
}