import { getMovie } from '../api.js';
export const movie = (_, args) => {
    const { id } = args;
    return getMovie(id);
};