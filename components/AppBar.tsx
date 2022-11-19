import { FC } from 'react';

import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import Image from 'next/image';

export const AppBar: FC = () => {
  return (
    <div>
      <Image src="/solanaLogo.png" height={30} width={200} />
      <span>Wallet-Adapter Example</span>
      <WalletMultiButton />
    </div>
  );
};
