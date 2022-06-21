import { useState } from 'react';

import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { pokeApi } from '../../api';
import { Layout } from '../../components/layouts';
import { Pokemon } from '../../interfaces';
import { existePokemonFavorito, toggleFavorites } from '../../helpers';

interface Props {
  pokemon: Pokemon;
}

const PokePage: NextPage<Props> = ({ pokemon }) => {
  const [favorited, setFavorited] = useState(existePokemonFavorito(pokemon.id));

  const onTogleFavorite = () => {
    toggleFavorites(pokemon.id);
    setFavorited(!favorited);
  };

  const { id, name } = pokemon;
  return (
    <Layout title={`Pokemon | ${name} `}>
      <Grid.Container css={{ marginTop: '5px' }} gap={2}>
        <Grid sm={4}>
          <Card>
            <Card.Body>
              <Card.Image
                src={
                  pokemon.sprites.other?.dream_world.front_default || '/no_img'
                }
                alt={name}
                width={100}
                height={100}
              ></Card.Image>
            </Card.Body>
          </Card>
        </Grid>
        <Grid sm={8}>
          <Card>
            <Card.Header
              css={{ dispaly: 'flex', justifyContent: 'space-between' }}
            >
              <Text h1 transform="capitalize">
                {name}
              </Text>
              <Button
                color="gradient"
                ghost={!favorited}
                onClick={onTogleFavorite}
              >
                {favorited ? 'Quitar de Favoritos' : 'Agregar a Favoritos'}
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={32}>Sprites</Text>
              <Container css={{ display: 'flex' }}>
                <Image
                  src={pokemon.sprites.front_default || '/no_img'}
                  alt={name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default || '/no_img'}
                  alt={name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny || '/no_img'}
                  alt={name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny || '/no_img'}
                  alt={name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};
export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemon151 = [...Array(151)].map((value, i) => `${i + 1}`);

  return {
    paths: pokemon151.map((id) => ({
      params: { id },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);

  return {
    props: {
      pokemon: data,
    },
  };
};

export default PokePage;
