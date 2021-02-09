import React, { useState } from "react";
import Search from "./Search";

function Header({setSearch, sorted, setSorted}) {

  

  const handleSort = () => {
    setSorted(!sorted)
  }

  console.log(sorted)

  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSearch={setSearch} />
      {/* <button onClick={handleSort}>Sort By Location</button> */}
      <h2>Sort By Location</h2>
      <br></br><br></br>
      <input onChange={handleSort} type="checkbox" ></input>
    </header>
  );
}

export default Header;
