import "@/styles/globals.css";
import Nav from "@/components/Nav";
import { AppProvider } from "./Context/store";

import React, { useMemo } from 'react';
import { useWallet, WalletProvider } from '@tronweb3/tronwallet-adapter-react-hooks';
import { WalletModalProvider } from '@tronweb3/tronwallet-adapter-react-ui';
import { WalletDisconnectedError, WalletError, WalletNotFoundError } from '@tronweb3/tronwallet-abstract-adapter';

export const metadata = {
  title: "NFTicket",
  description: "NFT ticketing service for events",
};

const RootLayout = ({ children }) => {
  // function onError(e) {
  //     if (e instanceof WalletNotFoundError) {
  //         // some alert for wallet not found
  //         console.log("Wallet not found")
  //     } else if (e instanceof WalletDisconnectedError) {
  //       // some alert for wallet not connected
  //       console.log("Wallet not connected")
  //     } else {
  //         console.error(e.message);
  //     }
  // }
  // const adapters = useMemo(function () {
  //     const tronLink = new TronLinkAdapter();
  //     const ledger = new LedgerAdapter({
  //         accountNumber: 2,
  //     });
  //     return [tronLink, ledger];
  // }, []);

  return (
    <html lang="en">
      <body className="">
        <AppProvider>
            <div className="main">
                <Nav/>
                {children}
            </div>
        </AppProvider>
      </body>
    </html>
  );
};

export default RootLayout;