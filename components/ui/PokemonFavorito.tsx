import { Grid } from '@nextui-org/react';
import { PokemonCard } from './PokemonCard';

interface Props {
  favoritos: number[];
}

export function PokemonFavorito({ favoritos }: Props) {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {favoritos.map((id) => (
        <PokemonCard key={id} pokemonId={id} />
      ))}
    </Grid.Container>
  );
}
