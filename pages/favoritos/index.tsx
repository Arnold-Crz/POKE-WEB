import { useEffect, useState } from 'react';
import { Layout } from '@/components/layouts';
import { NoFavoritos, PokemonFavorito } from '@/components/ui';
import { pokemons } from '@/helpers/localFavorites';

function FavoritesPages() {
  const [favoritos, setFavoritos] = useState<number[]>([]);

  useEffect(() => {
    setFavoritos(pokemons);
  }, []);

  return (
    <Layout title="Pokemons | Favoritos">
      {favoritos.length === 0 ? (
        <NoFavoritos />
      ) : (
        <PokemonFavorito favoritos={favoritos} />
      )}
    </Layout>
  );
}

export default FavoritesPages;
