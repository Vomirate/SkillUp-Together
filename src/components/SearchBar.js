import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

export default function SearchBar(){
    const handleSearch = (event) => {
        const searchTerm = event.target.value;
        console.log('Wyszukiwanie:', searchTerm);

      };
    return(
        <div className="search-bar">
        <input
          type="text"
          placeholder="Wyszukaj..."
          onChange={handleSearch}
        />
        <button type="button"> <AiOutlineSearch /> Szukaj</button>
      </div>
    )
}