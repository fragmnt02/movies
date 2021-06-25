import React from 'react';
import { gql } from "@apollo/client";

const UPDATE_MOVIE_GQL = gql`
    mutation($id: String, $movie: MovieInput) {
        updateMovie(id: $id, movie: $movie) {
            title
            rate
            image
        }
    }
`;

const ADD_MOVIE_GQL = gql`
    mutation($movie: MovieInput) {
        addMovie (movie: $movie) {
            title
            rate
            image
        }
    }
`;

export const Edit = () => {
    return (
        <div>
            <input type="text" placeholder="Title" />
            <input type="text" placeholder="Rate" />
            <input type="text" placeholder="Image" />
        </div>
    );
};