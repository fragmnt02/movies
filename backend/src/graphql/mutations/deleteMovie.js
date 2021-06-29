import { deleteMovie as deleteMovieAPI } from '../api.js';
export const deleteMovie = () => {
    return deleteMovieAPI();
};