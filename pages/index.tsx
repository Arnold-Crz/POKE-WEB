import type { NextPage } from 'next';

import { pokeApi } from '../api';
import { Layout } from '../components/layouts';
import { PokemonListResponse, SmallPokemon } from '../interfaces';
import { PokemonCard } from '../components/pokemons';
import { Grid } from '@nextui-org/react';

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title="Lista de Pokemon">
      <h1>Lista de Pokemons</h1>
      <Grid.Container gap={2} justify={'flex-start'}>
        {pokemons.map(({ id, name, img }) => (
          <PokemonCard key={id} id={id} name={name} img={img} />
        ))}
      </Grid.Container>
    </Layout>
  );
};

export async function getStaticProps() {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
  const pokemons: SmallPokemon[] = data.results.map((poke, index) => ({
    ...poke,
    id: index + 1,
    img: ` https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      index + 1
    }.svg`,
  }));

  return {
    props: {
      pokemons,
    },
  };
}

export default HomePage;
