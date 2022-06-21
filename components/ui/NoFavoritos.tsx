import { Container, Image, Text } from '@nextui-org/react';
import React from 'react';

export function NoFavoritos() {
  return (
    <Container
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: 'cal(100vh-100px)',
      }}
    >
      <Text h1>No hay favoritos</Text>
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png"
        width={150}
        height={150}
        alt="pikachu"
      />
    </Container>
  );
}
