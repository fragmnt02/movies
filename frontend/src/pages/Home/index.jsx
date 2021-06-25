import React from 'react';
import { gql } from "@apollo/client";
import {Movie} from '../../components/Movie';
import { MovieList } from '../../components/MovieList';

const GET_MOVIES_GQL = gql`
    query {
        movies {
            title
            rate
            image
        }
    }
`;


export const Home = () => {
    return (
        <div>
            <MovieList>
                <Movie title="El Padrino" rate={9.5} image="https://www.cineytele.com/wp-content/uploads/2018/06/el_padrino_poster.jpg" />
                <Movie title="El Padrino" rate={9.5} image="https://www.cineytele.com/wp-content/uploads/2018/06/el_padrino_poster.jpg" />
                <Movie title="El Padrino" rate={9.5} image="https://www.cineytele.com/wp-content/uploads/2018/06/el_padrino_poster.jpg" />
            </MovieList>
        </div>
    );
};