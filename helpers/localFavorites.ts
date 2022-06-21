const toggleFavorites = (id: number) => { 

  let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');
  if (favorites.includes(id)) {
    favorites = favorites.filter(favorite => favorite !== id);
  }else{
    favorites.push(id);
  }

  localStorage.setItem('favorites', JSON.stringify(favorites));

 }

 const existePokemonFavorito = (id: number) => {
  if(typeof window === 'undefined') return false;
  
  let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');
  return favorites.includes(id);
 }


 const pokemons = () => { 

  let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');
  return favorites;
 

  }
 export {
  toggleFavorites,
  existePokemonFavorito,
  pokemons
 }