import React from "react"
import AdBox from "./components/AdBox"
import FilterContainer from "./components/FilterContainer"
import Header from "./components/Header"
import SearchBar from "./components/SearchBar"

export default function App() {
    return (
        <div>
            <Header/>
            <SearchBar/> 
            <AdBox/>
            <FilterContainer/>
        </div>
    )
}