"use client"
import React, { useContext, useEffect, useState, useRef, useMemo } from "react"
import { TronLinkAdapter, WalletReadyState } from '@tronweb3/tronwallet-adapters';
// import { TronWeb } from "@/tronweb"; // this imports the tronweb library from tronweb.js (not in node_modules)
const TronWeb = require('../../tronweb')

const AppContext = React.createContext()

const AppProvider = (({children}) => {
    const [readyState, setReadyState] = useState();
    const [account, setAccount] = useState('');
    const [network, setNetwork] = useState({});
    const adapter = useMemo(() => new TronLinkAdapter(), []);

    const [isLoading, setIsLoading] = useState(false)

    const HttpProvider = TronWeb.providers.HttpProvider;
    const fullNode = new HttpProvider("https://nile.trongrid.io");
    const solidityNode = new HttpProvider("https://nile.trongrid.io");
    const eventServer = new HttpProvider("https://nile.trongrid.io");
    const privateKey = process.env.NEXT_PUBLIC_TRONLINK_PRIV_KEY; // seems like im only able to make transactions with the wallet this priv key belongs to?
    // window.tronWeb = new TronWeb(fullNode,solidityNode,eventServer, privateKey);
    const tronWeb = window.tronWeb
    // tronWeb.setHeader({"TRON-PRO-API-KEY": process.env.NEXT_PUBLIC_TRONGRID_API_KEY});

    // READ FUNCTIONS (NFT CONTRACT)

    const getOwnedTokenIds = async (ownerAddress, contractAddress) => {
        // eventually i need the contract address to determine which contract im looking for information
        // right now i shall just hardcode it to taylor contract only to make sure everything works first
        const contract = await tronWeb.contract().at(process.env.NEXT_PUBLIC_TAYLOR_CONTRACT_ADDRESS)
        const ownedTokens = await contract.getOwnedTokenIds(ownerAddress).call()
        console.log("this is owned tokens: ", ownedTokens)
        return ownedTokens
    }

    const isEventCanceled = async (contractAddress) => {
        const contract = await tronWeb.contract().at(process.env.NEXT_PUBLIC_TAYLOR_CONTRACT_ADDRESS)
        return await contract.eventCanceled().call()
    }

    const getCatPrices = async (categoryId) => {
        const contract = await tronWeb.contract().at(process.env.NEXT_PUBLIC_TAYLOR_CONTRACT_ADDRESS)
        const ticketPrice = await contract.categoryPrices(categoryId).call()
        const decimalPrice = tronWeb.toDecimal(ticketPrice._hex)
        
        console.log("selected ticket price: ", typeof decimalPrice, decimalPrice)
        return decimalPrice
    }

    // const getMintLimit = (contractAddress) => {
    const getMintLimit = async () => {
        const contract = await tronWeb.contract().at(process.env.NEXT_PUBLIC_TAYLOR_CONTRACT_ADDRESS)
        const mintLimit = await contract.mintLimitPerAddress().call()
        const decimalLimit = tronWeb.toDecimal(mintLimit._hex)
        return decimalLimit
    }

    // WRITE FUNCTIONS (NFT CONTRACT)

    const mintTicket = async (categoryId, quantity, fee) => {
        console.log(categoryId, quantity, fee)
        try {
            const contract = await tronWeb.contract().at(process.env.NEXT_PUBLIC_TAYLOR_CONTRACT_ADDRESS)
            const result = await contract.mintTicket(categoryId, quantity).send({
                feeLimit: 1000000000,
                callValue: fee * quantity,
                shouldPollResponse: true
            })
            console.log(result)
            return {success: true, result}
        } catch (error) {
            console.log("Error minting ticket: ", error)
            return { success: false, error }
        }
        
    }

    // UTILITY FUNCTIONS

    const isTronLinkConnected = async () => {
        console.log("tronweb connection: ", await tronWeb.isConnected())

        if (tronWeb) {
            return true
        }
        else {
            return false
        }
    }

    const decodeHexString = (hexString) => {
        const data = hexString.slice(8); // Remove the function selector
        const decodedString = tronWeb.toUtf8(data);
        const strippedString = decodedString.replace(/[\u0000-\u001F]+/g, ''); // Remove null padding
        return strippedString.trim(); // Additionally, trim any whitespace from both ends of the string
    }

    return(
        <AppContext.Provider value={{
            adapter, readyState, account, network,isLoading,
            setReadyState, setAccount, setNetwork,setIsLoading,
            tronWeb, 
            getOwnedTokenIds, mintTicket, isTronLinkConnected, getCatPrices, decodeHexString, getMintLimit
        }}>
            {children}
        </AppContext.Provider>
    )
})

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }