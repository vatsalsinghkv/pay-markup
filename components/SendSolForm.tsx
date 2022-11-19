import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import * as web3 from '@solana/web3.js';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import { FC, useState } from 'react';
import Button from './Button';

export const SendSolForm = ({ price, address }: { price: number; address: string }) => {
  const [txSig, setTxSig] = useState('');
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  const link = () => {
    return txSig ? `https://explorer.solana.com/tx/${txSig}?cluster=devnet` : '';
  };

  const sendSol = (e) => {
    e.preventDefault();
    if (!connection || !publicKey) {
      return;
    }
    const transaction = new web3.Transaction();
    const recipientPubKey = new web3.PublicKey(address);

    const sendSolInstruction = web3.SystemProgram.transfer({
      fromPubkey: publicKey,
      toPubkey: recipientPubKey,
      lamports: LAMPORTS_PER_SOL * price,
    });

    transaction.add(sendSolInstruction);
    sendTransaction(transaction, connection).then((sig) => {
      setTxSig(sig);
    });
  };

  return (
    <div>
      {publicKey ? (
        <form onSubmit={sendSol}>
          <p className="info">Total Amount: {price} sol</p>
          <Button type="submit">Pay</Button>
        </form>
      ) : (
        <span>Connect Your Wallet</span>
      )}
      {txSig ? (
        <div>
          <p>View your transaction on </p>
          <a href={link()}>Solana Explorer</a>
        </div>
      ) : null}
    </div>
  );
};
