"use client"
import React, { useContext, useEffect, useState, useRef } from "react"

const AppContext = React.createContext()

const AppProvider = (({children}) => {
    const testContextValue = "your mum"

    return(
        <AppContext.Provider value={{
            testContextValue
        }}>
            {children}
        </AppContext.Provider>
    )
})

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }