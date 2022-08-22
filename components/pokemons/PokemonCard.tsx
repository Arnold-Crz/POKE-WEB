import { Button, Card, Col, Grid, Row, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';

import { SmallPokemon } from '../../interfaces';

export function PokemonCard({ id, name, img }: SmallPokemon) {
  const router = useRouter();

  const clickPokeInfo = () => {
    router.push(`/name/${name}`);
  };

  return (
    <Grid sm={6} md={4} key={id}>
      <Card css={{ width: '400px' }}>
        <Card.Header>
          <Col>
            <Text size={12} weight="bold" transform="uppercase" color="#9E9E9E">
              {name}
            </Text>
          </Col>
        </Card.Header>
        <Card.Body css={{ p: 0, mb: '45px' }}>
          <Card.Image
            src={img}
            alt={name}
            width="100%"
            height={140}
          ></Card.Image>
        </Card.Body>
        <Card.Footer
          isBlurred
          css={{
            position: 'absolute',
            bgBlur: '#0f111466',
            borderTop: '$borderWeights$light solid $gray800',
            bottom: 0,
            zIndex: 1,
          }}
        >
          <Row justify="space-between">
            <Text>{name}</Text>
            <Button
              flat
              auto
              rounded
              css={{ color: '#94f9f0', bg: '#94f9f026' }}
            >
              <Text
                css={{ color: '#fff' }}
                size={12}
                weight="bold"
                onClick={clickPokeInfo}
              >
                Ver Info
              </Text>
            </Button>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
}
