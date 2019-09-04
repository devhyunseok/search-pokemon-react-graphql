import gql from 'graphql-tag';

export const POKEMON_LIST = gql`
    {
        pokemons(first: 100) {
            id
            number
            name
            image
        }
    }
`;

export const POKEMON_DETAIL = gql`
    {
        albumThumbnail(albumId: 1) {
            thumbnailUrl
        }
    }
`;

