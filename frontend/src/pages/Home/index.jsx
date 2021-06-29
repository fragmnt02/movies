import React, { useState, useEffect } from 'react';
import { gql, useQuery } from "@apollo/client";
import { Movie } from 'components/Movie';
import { MovieList } from 'components/MovieList';

const GET_MOVIES_GQL = gql`
    query {
        movies {
            title
        }
    }
`;


export const Home = () => {
    const [movies, setMovies] = useState([]);
    const { data, error, loading } = useQuery(GET_MOVIES_GQL);

    useEffect(() => {
        if (!loading) {
            if (error) {
                throw new Error(error);
            }
            setMovies(data.movies);
        }
    }, [loading]);

    if (loading) {
        return <div>Loading...</div>
    }
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