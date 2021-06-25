import { gql } from 'apollo-server';

export default gql`
    input MovieInput {
        title: String    
    }

    type Movie {
        title: String   
    }

    type BasicResponse {
        ok: Boolean
    }

    type Query {
        movies: [Movie]
        movie(id:String): Movie
    }

    type Mutation {
        addMovie(movie:MovieInput): Movie
        updateMovie(movie:MovieInput): Movie
        deleteMovie(id:String): BasicResponse
    }
`;