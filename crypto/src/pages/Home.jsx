
import React from "react"
import {Link} from "react-router-dom"
import homeStore from "../stores/homeStore"


export default function Home() {
  const store = homeStore()

  React.useEffect(() => {
    store.fetchCoins()
  },[])

  return (
    <div>
      <input type="text" placeholder="Search" value = {store.query} onChange = {store.setQuery}/>

      {store.coins.map(coin => {
        return(
          <div key ={coin.id}>
            <Link to={`/show/${coin.id}`}>{coin.name}</Link>
        
          </div>
        )
      })}
    </div>
  )
}
