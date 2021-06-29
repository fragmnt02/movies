import React from 'react';
import * as Styles from 'components/Movie/style';
import { gql } from "@apollo/client";

const DELETE_MOVIE_GQL = gql`
    mutation($id: String) {
        deleteMovie(id: $id){
            title
            rate
            image
        }
    }
`;

export const Movie = ({image, title, rate, id}) => {
    return(
        <Styles.Container>
            <Styles.Image src={image} />
            <Styles.Title>{title}</Styles.Title>
            <Styles.Rate>Rate {rate}</Styles.Rate>
            <Styles.Delete>Delete</Styles.Delete>
        </Styles.Container>
    );
}