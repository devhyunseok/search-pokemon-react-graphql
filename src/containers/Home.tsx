import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useQuery} from '@apollo/react-hooks';
import {POKEMON_LIST} from 'modules/queries';
import ListWrapper from "components/ListWrapper";
import PokemonItem from 'components/PokemonItem';

interface IProps {

}

interface PokemonItem {
  id: string;
  image: string;
  number: number;
  name: string;
}

const Homne = React.memo(() => {
  const {loading, error, data} = useQuery(POKEMON_LIST);


  if (loading) {
    return <div>Loading</div>
  }

  if (error) {
    return <div>Loading Error</div>
  }

  console.log(data);

  return (
    <ListWrapper>
      {
        data.pokemons.map((item: PokemonItem) => {
          return <PokemonItem key={item.id} name={item.name} image={item.image} number={item.number}/>
        })
      }
    </ListWrapper>);
});

export default Homne;
