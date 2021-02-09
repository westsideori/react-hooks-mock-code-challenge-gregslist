import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listings, setListings] = useState([])
  const [search, setSearch] = useState("")
  const [sorted, setSorted] = useState(false)

  useEffect(() => {
    fetch(`http://localhost:6001/listings`)
      .then(resp => resp.json())
      .then(listingsArray => {
        setListings(listingsArray)
      })
  }, [])

  const updateListings = (id) => {
    const updatedListings = listings.filter(listing => {
      return listing.id !== id
    })
    setListings(updatedListings)
  }

  

  const displayListings = listings.filter(listing => {
    return listing.description.toLowerCase().includes(search.toLowerCase())
  })

  const sortedListings = listings.sort((listingA, listingB) => {
    if (listingA.location > listingB.location) {
      return 1
    } else if (listingA.location < listingB.location) {
      return -1
    } else {
      return 0
    }
    
  })
      

  return (
    <div className="app">
      <Header setSearch={setSearch} sorted={sorted} setSorted={setSorted} />
      <ListingsContainer listings={sorted ? sortedListings : displayListings} updateListings={updateListings} />
    </div>
  );
}

export default App;
