import React from 'react';
import * as Styles from 'components/MovieList/styles';

export const MovieList = ({children}) => {
    return(
        <Styles.Container>
            {children}
        </Styles.Container>
    );
}