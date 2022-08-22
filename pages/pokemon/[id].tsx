import { useState } from 'react';

import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import canvas from 'canvas-confetti';

import { pokeApi } from '../../api';
import { Layout } from '@/components/layouts';
import { Pokemon } from '../../interfaces';
import {
  existePokemonFavorito,
  getPokemon,
  toggleFavorites,
} from '../../helpers/';

interface Props {
  pokemon: Pokemon;
}

const PokePage: NextPage<Props> = ({ pokemon }) => {
  const [favorited, setFavorited] = useState(existePokemonFavorito(pokemon.id));

  const onTogleFavorite = () => {
    toggleFavorites(pokemon.id);
    setFavorited(!favorited);
    if (favorited) return;

    canvas({
      zIndex: 1,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        x: 1,
        y: 0,
      },
    });
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
  const pokemon = await getPokemon(id);

  if (!pokemon) {
    return {
      redirect: {
        destination: '/',
        permanent: false, // Esto permite validar si la redirección es permanente o no por que puede que se actulize la página y no se redireccione ya que ese resultado ya es valido.
      },
    };
  }
  return {
    props: {
      pokemon,
    },
    revalidate: 86400, // cada 10 se la paginas se vuelve a renderizar 86400 = 60 * 60 * 24 cada dia
  };
};

export default PokePage;
