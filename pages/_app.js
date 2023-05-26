import '@/styles/globals.css'
import React, { useState } from "react";


export const AppContext = React.createContext();


export default function App({ Component, pageProps }) {

  const [cart, setCart] = useState()
  const [amount, setAmount] = useState(0)

  return <AppContext.Provider value={{cart , setCart, amount, setAmount}}><Component {...pageProps} /></AppContext.Provider>
}
