import React, { FC, useMemo } from "react";
import {
  ConnectionProvider,
  WalletProvider
} from "@solana/wallet-adapter-react";
import {
  WalletModalProvider,
  WalletMultiButton
} from "@solana/wallet-adapter-react-ui";
import {
  PhantomWalletAdapter
} from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";

import "@solana/wallet-adapter-react-ui/styles.css";

const App: FC = () => {
  const endpoint = clusterApiUrl("devnet");

  const wallets = useMemo(() => [
    new PhantomWalletAdapter(),
  ], []);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <h1>Solana Wallet Connect Demo</h1>
          <WalletMultiButton />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default App;
