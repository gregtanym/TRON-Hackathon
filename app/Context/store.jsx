"use client"
import React, { useContext, useEffect, useState, useRef, useMemo } from "react"
import { TronLinkAdapter, WalletReadyState } from '@tronweb3/tronwallet-adapters';

const AppContext = React.createContext()

const AppProvider = (({children}) => {
    const [readyState, setReadyState] = useState();
    const [account, setAccount] = useState('');
    const [network, setNetwork] = useState({});
    const adapter = useMemo(() => new TronLinkAdapter(), []);

    return(
        <AppContext.Provider value={{
            adapter, readyState, account, network,
            setReadyState, setAccount, setNetwork
        }}>
            {children}
        </AppContext.Provider>
    )
})

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }