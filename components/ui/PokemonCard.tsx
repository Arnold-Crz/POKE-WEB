import { Card, Grid } from '@nextui-org/react';
import { useRouter } from 'next/router';
import React from 'react';

interface Props {
  pokemonId: number;
}

export function PokemonCard({ pokemonId }: Props) {
  const ruter = useRouter();

  const pokemonLink = () => {
    ruter.push(`/pokemon/${pokemonId}`);
  };

  return (
    <Grid
      css={{ cursor: 'pointer' }}
      onClick={pokemonLink}
      key={pokemonId}
      xs={6}
      sm={2}
      md={3}
    >
      <Card isHoverable css={{ pading: 10 }}>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
          alt="pokemon"
          width={100}
          height={100}
        ></Card.Image>
      </Card>
    </Grid>
  );
}
