import React from 'react';
import Styles from 'styled-components';

export const MovieList = ({children}) => {
    return(
        <Styles.Container>
            {children}
        </Styles.Container>
    );
}