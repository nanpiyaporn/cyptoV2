import React, { useState } from "react"
import homeStore from "../stores/homeStore"


export default function Home() {
  const store = homeStore()
  React.useEffect(() => {
    store.fetchCoins()
  },[])

  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}
