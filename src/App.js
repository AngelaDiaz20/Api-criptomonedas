import { useState, useEffect } from "react";
import "./App.css"; 
import Footer from './Footer'
import Header from './Header'
import TableCoins from "./TableCoins";

export default function App() {

  const [coins, setCoins] = useState()

  const getData = async () =>{
    const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false&price_change_percentage=1h%2C%2024h%2C%207d%2C%2014d%2C%2030d%2C%201y')
    //console.log(response)
    const json = await response.json()
    //console.log(json)
    setCoins(json)
  }

  useEffect (()=>{
    getData()
  },[])
  
  return (
    !coins ? "Cargando..." :(
    <div className='App'>
        <Header/>
        <TableCoins coins={coins}/>
        <Footer/>
    </div>
    )
  )
}

