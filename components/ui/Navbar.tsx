import { Spacer, Text, useTheme } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';

export function Navbar() {
  const { theme } = useTheme();
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        padding: '0.5rem 1rem',
        backgroundColor: theme?.colors.white.value,
        color: '#000',
      }}
    >
      <Image
        src={
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/172.png'
        }
        alt={'pichu'}
        width={70}
        height={70}
      />
      <Link href="/">
        <div
          style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
        >
          <Text color="#000" h2>
            P
          </Text>
          <Text color="#000" h3>
            okémon
          </Text>
        </div>
      </Link>
      <Spacer css={{ flex: 1 }} />
      <Link href="/favoritos">
        <Text style={{ cursor: 'pointer' }} color="#000" h3>
          Favoritos
        </Text>
      </Link>
    </div>
  );
}
