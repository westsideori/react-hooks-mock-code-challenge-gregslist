import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, updateListings}) {

const listingItems = listings.map(listing => {
  return <ListingCard key={listing.id} listing={listing} updateListings={updateListings} />
})

  return (
    <main>
      <ul className="cards">
        {listingItems}
      </ul>
    </main>
  );
}

export default ListingsContainer;
